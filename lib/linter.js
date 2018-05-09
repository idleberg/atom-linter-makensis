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
    preprocessMode: {
      title: "Pre-process Mode",
      description: "Linter runs in the much faster pre-process mode, but ignores warning (unless in strict mode)",
      type: "string",
      default: "PPO",
      enum: ["(none)", "PPO", "Safe PPO"],
      order: 2
    },
    strictMode: {
      title: 'Strict Mode',
      description: 'Treats warnings as errors, requires NSIS v3.0 (or higher)',
      type: 'boolean',
      default: false,
      order: 3
    },
    manageDependencies: {
      title: 'Manage Dependencies',
      description: 'When enabled, third-party dependencies will be installed automatically',
      type: 'boolean',
      default: true,
      order: 4
    },
    advanced: {
      title: 'Advanced Settings',
      type: 'object',
      order: 5,
      properties: {
        preExecute: {
          title: 'Prepend code',
          description: 'Comma-separated list of commands to be prepended to your script',
          type: 'string',
          default: '',
          order: 1
        },
        postExecute: {
          title: 'Append code',
          description: 'Comma-separated list of commands to be appended to your script',
          type: 'string',
          default: '',
          order: 2
        },
        useWine: {
          title: 'Use Wine',
          description: 'When on a non-Windows platform, you can compile installers using [Wine](https://www.winehq.org/). Make sure to set up `pathToMakensis` accordingly or add `makensis` to the Wine\'s PATH environmental variable.',
          type: 'boolean',
          default: false,
          order: 3
        },
        clearConsole: {
          title: "Clear Console",
          description: "Clears the console prior to linting. Only works when in developer mode.",
          type: "boolean",
          default: false,
          order: 4
        }
      }
    }
  },

  activate() {
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
        const preExecute = Util.getConfig('advanced.preExecute').trim();
        const postExecute = Util.getConfig('advanced.postExecute').trim();
        const useWine = (platform() !== 'win' && Util.getConfig('advanced.useWine') === true) ? true : false;
        let outFile;

        const options = {
          preExecute: (preExecute.length > 0) ? preExecute.split(',') : [],
          postExecute: (postExecute.length > 0) ? postExecute.split(',') : [],
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
