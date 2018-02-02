'use strict';

let meta, helpers, makeNSIS;

// Dependencies
const loadDeps = () => {
  if (!helpers) {
    helpers = require('atom-linter');
  }
  if (!makeNSIS) {
    makeNSIS =  require('makensis').compile;
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
      default: false,
      order: 1,
    },
    strictMode: {
      title: "Strict Mode",
      description: "Treats warnings as errorsm, requires NSIS v3.0 (or higher)",
      type: "boolean",
      default: false,
      order: 2
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

  findWarnings(filePath, textEditor, output, options) {
    let results = [];
    let resultsWarn = output.match(/^warning: (.*) \(.*?:(\d+)\)/gm);

    if(resultsWarn !== null) {
      resultsWarn.forEach((result) => {
        let severity = (options.strict === true) ? 'error' : 'warning';
        let match = result.match(/warning: (.*) \(.*?:(\d+)\)/);

        results.push({
          severity: severity,
          excerpt: match[1],
          location: {
            file: filePath,
            position: helpers.generateRange(textEditor, parseInt(match[2]) - 1),
          }
        })
      });
    }

    return results;
  },

  findErrors(filePath, textEditor, output) {
    let results = [];
    let resultsErr = /(.*)\r?\n.*rror in script:? ".*" on line (\d+)/.exec(output);

    if(resultsErr !== null) {
      results.push({
        severity: 'error',
        excerpt: resultsErr[1],
        location: {
          file: filePath,
          position: helpers.generateRange(textEditor, parseInt(resultsErr[2]) - 1),
        }
      });
    }

    return results;
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

        loadDeps();

        const options = {
          strict: atom.config.get(`${meta.name}.strictMode`),
          verbose: 2
        };

        return makeNSIS(filePath, options)
        .then( (output) => {
          if (atom.inDevMode()) {
            console.info('Compiler Options:', options);
            console.info("Output:", output);
          }

          if (textEditor.getText() !== fileContents) {
            if (atom.inDevMode()) {
              console.warn('File has changed since the lint was triggered');
            }

            return null;
          }

          return this.findWarnings(filePath, textEditor, output.stdout, options);
        })
        .catch(output => {
          if (atom.inDevMode()) {
            console.info('Compiler Options:', options);
            console.info("Output:", output);
          }

          if (textEditor.getText() !== fileContents) {
            if (atom.inDevMode()) {
              console.warn('File has changed since the lint was triggered');
            }

            return null;
          }

          let results = [];

          if (output.stdout) {
            let resultsWarn = this.findWarnings(filePath, textEditor, output.stdout, options);
            if (resultsWarn) results = results.concat(resultsWarn);
          }

          if (output.stderr) {
            let resultsErr = this.findErrors(filePath, textEditor, output.stderr);
            if (resultsErr) results = results.concat(resultsErr);
          }

          if (results.length === 0) return;

          return results;
        });
      }
    }
  }
};
