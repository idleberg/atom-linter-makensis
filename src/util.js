const helpers = require('atom-linter');
const meta = require('../package.json');
const open = require('open');

module.exports = {

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

  showANSIDeprecationWarning() {
    const notification = atom.notifications.addWarning('ANSI targets are deprecated as of NSIS v3.05, consider moving to Unicode', {
      dismissable: true,
      buttons: [
        {
          text: "Unicode Installer",
          className: "icon icon-search",
          onDidClick: function() {
            open('https://idleberg.github.io/NSIS.docset/Contents/Resources/Documents/html/Reference/Unicode.html?utm_source=atom');

            return notification.dismiss();
          }
        },
        {
          text: "Mute Warning",
          className: "icon icon-gear",
          onDidClick: function() {
            atom.config.set('linter-makensis.advanced.muteANSIDeprecationWarning', true);

            return notification.dismiss();
          }
        }
      ]
    });
  },

  findWarnings(textEditor, output, options) {
    const results = [];
    const lines = output.split('\n');

    lines.forEach((result) => {
      const severity = (options.strict === true) ? 'error' : 'warning';
      const resultsWarn = (/warning: (?<message>.*) \((?<file>.*)?:(?<line>\d+)\)/).exec(result);

      if (resultsWarn) {
        results.push({
          severity: severity,
          excerpt: resultsWarn.groups.message,
          location: {
            file: resultsWarn.groups.file,
            position: helpers.generateRange(textEditor, parseInt(resultsWarn.groups.line) - 1),
          }
        });
      }
    });

    if (!this.getConfig('advanced.muteANSIDeprecationWarning') && output.includes('7998: ANSI targets are deprecated')) {
      this.showANSIDeprecationWarning();
    }

    return results;
  }
};
