'use strict';

let meta, helpers, makeNSIS;

// Dependencies
const loadDeps = () => {
  if (!helpers) {
    helpers = require('atom-linter');
  }
  if (!makeNSIS) {
    makeNSIS =  require('makensis').compileSync;
  }
  if (!meta) {
    meta =  require('../package.json');
  }
};

module.exports = {
  config: {
    notifyOnException: {
      title: "Notify on Exception",
      description: "Displays notications for all errors lacking a line-number",
      type: "boolean",
      default: false
    }
  },

  activate() {
    this.idleCallbacks = new Set();
    let depsCallbackID;
    const installLinterJSHintDeps = () => {
      this.idleCallbacks.delete(depsCallbackID);
      if (!atom.inSpecMode()) {
        require('atom-package-deps').install('linter-makensis');
      }
      loadDeps();
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
        const lastLine = fileContents.split(/\r?\n/).length - 1;

        loadDeps();

        let line, message;

        const options = {
          // strict: true,
          verbose: 2
        };

        const output = makeNSIS(filePath, options);
        const resultErr = /(.*)\r?\n.*rror in script:? ".*" on line (\d+)/.exec(output.stderr);
        // const resultWarn = /.*arning: (.*) \(...*?:(\d+)\)/.exec(output.stdout);

        if (atom.inDevMode()) {
          console.log('Compiler Options:', options);
          console.log("Output:", output);
        }

        if (resultErr !== null && resultErr.length === 3) {
          message = resultErr[1];
          line = parseInt(resultErr[2]) - 1;
        } else if (output.stderr) {
          if (atom.config.get(`${meta.name}.notifyOnException`)) {
            atom.notifications.addError(`**${meta.name} v${meta.version}**`, { detail: output.stderr, dismissable: true })
          }
          message = output.stderr;
          line = lastLine;
        }

        if (!message) {
          if (atom.inDevMode()) {
            console.log('makensis didn\'t throw an error');
          }

          return [];
        }

        if (textEditor.getText() !== fileContents) {
          if (atom.inDevMode()) {
            console.warn('File has changed since the lint was triggered');
          }

          return null;
        }

        return [{
          severity: 'error',
          excerpt: message,
          location: {
            file: filePath,
            position: helpers.generateRange(textEditor, line),
          },
        }];
      }
    }
  }
};
