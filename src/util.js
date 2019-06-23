const helpers = require('atom-linter');
const meta = require('../package.json');

module.exports = {

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

  getConfig(key = null) {
    if (key) {
      return atom.config.get(`${meta.name}.${key}`);
    }

    return atom.config.get(`${meta.name}`);
  },

  openSettings: function() {
    const options = {
      pending: true,
      searchAllPanes: true
    };

    return atom.workspace.open(`atom://config/packages/${meta.name}`, options);
  },

  satisfyDependencies() {
    let atomPackageDeps = require('atom-package-deps');
    let packageDeps = meta['package-deps'];

    atomPackageDeps.install(meta.name, true);

    packageDeps.forEach((key) => {
      let val = packageDeps[key];

      if (atom.packages.isPackageDisabled(val)) {
        if (atom.inDevMode()) {
          console.log(`Enabling package '${val}'`);
        }

        results.push(atom.packages.enablePackage(val));
      }
    });
  }
};
