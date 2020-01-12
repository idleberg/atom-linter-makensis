const helpers = require('atom-linter');
const meta = require('../package.json');

module.exports = {

  findErrors(textEditor, output) {
    const results = [];
    const resultsErr = /(?<message>.*)\r?\n.*rror in script:? "(?<file>.*)" on line (?<line>\d+)/.exec(output);

    if(resultsErr !== null) {
      results.push({
        severity: 'error',
        excerpt: resultsErr.groups.message,
        location: {
          file: resultsErr.groups.file,
          position: helpers.generateRange(textEditor, parseInt(resultsErr.groups.line) - 1),
        }
      });
    }

    return results;
  },

  findWarnings(textEditor, output, options) {
    const results = [];
    const lines = output.split('\n');

    lines.forEach((result) => {
      const severity = (options.strict === true) ? 'error' : 'warning';
      const resultsWarn =(/warning: (?<message>.*) \((?<file>.*)?:(?<line>\d+)\)/).exec(result);

      results.push({
        severity: severity,
        excerpt: resultsWarn.groups.message,
        location: {
          file: resultsWarn.groups.file,
          position: helpers.generateRange(textEditor, parseInt(resultsWarn.groups.line) - 1),
        }
      })
    });

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
