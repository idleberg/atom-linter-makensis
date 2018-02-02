'use strict';

// Dependencies
const { compile } = require('makensis');
const { platform } = require('os');
const Util = require('./util');

module.exports = {
  config: {
    pathToMakensis: {
      title: 'Path to MakeNSIS',
      description: 'Specify the full path to `makensis`',
      type: 'string',
      default: 'makensis',
      order: 1
    },
    strictMode: {
      title: 'Strict Mode',
      description: 'Treats warnings as errors, requires NSIS v3.0 (or higher)',
      type: 'boolean',
      default: false,
      order: 2
    },
    manageDependencies: {
      title: 'Manage Dependencies',
      description: 'When enabled, third-party dependencies will be installed automatically',
      type: 'boolean',
      default: true,
      order: 3
    }
  },

  activate() {
    const CompositeDisposable = require("atom").CompositeDisposable;
    this.subscriptions = new CompositeDisposable;

    this.subscriptions.add(atom.commands.add("atom-workspace", {
      'linter-MakeNSIS:open-settings': ( () => {
        return () => {
          return Util.openSettings();
        };
      })(this)
    }));

    this.subscriptions.add(atom.commands.add("atom-workspace", {
      'linter-MakeNSIS:satisfy-dependencies': ( () => {
        return () => {
          return Util.satisfyDependencies();
        };
      })(this)
    }));

    this.idleCallbacks = new Set();
    let depsCallbackID;

    const installLinterJSHintDeps = () => {
      this.idleCallbacks.delete(depsCallbackID);

      if (!atom.inSpecMode() && Util.getConfig('manageDependencies')) {
        Util.satisfyDependencies();
      }
    };

    depsCallbackID = window.requestIdleCallback(installLinterJSHintDeps);
    this.idleCallbacks.add(depsCallbackID);
  },

  deactivate() {
    this.idleCallbacks.forEach(callbackID => window.cancelIdleCallback(callbackID));
    this.idleCallbacks.clear();
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
        const outFile = (platform() === 'win32') ? 'OutFile NUL' : 'OutFile /dev/null/'

        const options = {
          execute: [outFile],
          pathToMakensis: Util.getConfig('pathToMakensis'),
          strict: Util.getConfig('strictMode'),
          verbose: 2
        };

        return compile(filePath, options)
        .then( (output) => {
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

          return Util.findWarnings(filePath, textEditor, output.stdout, options);
        })
        .catch(output => {
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

          let results = [];

          if (output.stdout) {
            let resultsWarn = Util.findWarnings(filePath, textEditor, output.stdout, options);
            if (resultsWarn) results = results.concat(resultsWarn);
          }

          if (output.stderr) {
            let resultsErr = Util.findErrors(filePath, textEditor, output.stderr);
            if (resultsErr) results = results.concat(resultsErr);
          }

          if (results.length === 0) return null;

          return results;
        });
      }
    }
  }
};
