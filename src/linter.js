'use strict';

// Dependencies
const { compile } = require('makensis');
const { platform } = require('os');
const { satisfyDependencies } = require('atom-satisfy-dependencies');
const Util = require('./util');
const configSchema = require('./config');

module.exports = {
  config: configSchema,

  async activate() {
    const CompositeDisposable = require('atom').CompositeDisposable;
    this.subscriptions = new CompositeDisposable;

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'linter-MakeNSIS:open-settings': ( () => {
        return () => {
          return Util.openSettings();
        };
      })(this)
    }));

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'linter-MakeNSIS:satisfy-dependencies': ( () => {
        return () => {
          return satisfyDependencies();
        };
      })(this)
    }));

    this.idleCallbacks = new Set();
    let depsCallbackID;

    const installLinterJSHintDeps = () => {
      this.idleCallbacks.delete(depsCallbackID);

      if (!atom.inSpecMode() && Util.getConfig('manageDependencies')) {
        satisfyDependencies();
      }
    };

    depsCallbackID = window.requestIdleCallback(installLinterJSHintDeps);
    this.idleCallbacks.add(depsCallbackID);

    this.cleanUp();
  },

  deactivate() {
    this.idleCallbacks.forEach(callbackID => window.cancelIdleCallback(callbackID));
    this.idleCallbacks.clear();
  },

  cleanUp() {
    atom.config.unset('linter-makensis.ppoMode');
  },

  provideLinter() {
    return {
      name: 'makensis',
      grammarScopes: ['source.nsis'],
      scope: 'file',
      lintsOnChange: false,
      lint: async (textEditor) => {
        const filePath = textEditor.getPath();
        const fileContents = textEditor.getText();
        const preExecute = Util.getConfig('advanced.preExecute');
        const postExecute = Util.getConfig('advanced.postExecute');
        const useWine = (platform() !== 'win' && Util.getConfig('advanced.useWine') === true) ? true : false;
        let outFile;

        let options = {
          preExecute: Array.isArray(preExecute) ? preExecute : [],
          postExecute: Array.isArray(postExecute) ? postExecute : [],
          PPO: null,
          safePPO: null,
          pathToMakensis: Util.getConfig('pathToMakensis'),
          strict: Util.getConfig('strictMode'),
          verbose: 2,
          wine: useWine
        };

        switch (Util.getConfig('preprocessMode').trim()) {
          case 'PPO':
            options.PPO = true;
            break;
          case 'Safe PPO':
            options.safePPO = true;
            break;
          default:
            outFile = platform() === 'win32' ? 'OutFile NUL' : 'OutFile /dev/null/';
            options.postExecute.push(outFile);
            break;
        }

        if (Util.getConfig("advanced.clearConsole")) {
          console.clear();
        }

        return compile(filePath, options)
        .then(output => {
          if (atom.inDevMode()) {
            console.info('Compiler Options:', options);
            console.info('Output:', output);
          }

          if (textEditor.getText() !== fileContents) {
            if (atom.inDevMode()) {
              console.warn('File has changed since the lint was triggered');
            }

            return null;
          }

          const results = [];

          if (output.stdout) {
            const resultsWarn = Util.findWarnings(textEditor, output.stdout, options);
            if (resultsWarn) results.push(...resultsWarn);
          }

          if (output.stderr) {
            const resultsErr = Util.findErrors(textEditor, output.stderr);
            if (resultsErr) results.push(...resultsErr);
          }

          if (results.length === 0) return null;

          return results;
        });
      }
    }
  }
};
