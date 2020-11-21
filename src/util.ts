import { TextEditor } from 'atom';
import { packageName } from './config';
import * as atomLinter from 'atom-linter';
import open from 'open';

export default {
  getConfig(key = null): unknown {
    if (key) {
      return atom.config.get(`${packageName}.${key}`);
    }

    return atom.config.get(`${packageName}`);
  },

  openSettings: function(): void {
    const options = {
      pending: true,
      searchAllPanes: true
    };

    atom.workspace.open(`atom://config/packages/${packageName}`, options);
  },

  showANSIDeprecationWarning(): void {
    const notification = atom.notifications.addWarning('ANSI targets are deprecated as of NSIS v3.05, consider moving to Unicode', {
      dismissable: true,
      buttons: [
        {
          text: "Unicode Installer",
          className: "icon icon-search",
          onDidClick: function() {
            open('https://idleberg.github.io/NSIS.docset/Contents/Resources/Documents/html/Reference/Unicode.html?utm_source=atom');

            notification.dismiss();
          }
        },
        {
          text: "Mute Warning",
          className: "icon icon-gear",
          onDidClick: function() {
            atom.config.set(`${packageName}.advanced.muteANSIDeprecationWarning`, true);

            notification.dismiss();
          }
        }
      ]
    });
  },

  findErrors(textEditor: TextEditor, output: string): unknown[] {
    const results = [];
    const resultsErr = /(?<message>.*)\r?\n.*rror in script:? "(?<file>.*)" on line (?<line>\d+)/.exec(output);

    if(resultsErr !== null) {
      results.push({
        severity: 'error',
        excerpt: resultsErr.groups.message,
        location: {
          file: resultsErr.groups.file,
          position: atomLinter.generateRange(textEditor, parseInt(resultsErr.groups.line) - 1),
        }
      });
    }

    return results;
  },

  findWarnings(textEditor: TextEditor, output: string, options: LinterNsisOptions): unknown[] {
    if (!this.getConfig('advanced.muteANSIDeprecationWarning') && output.includes('7998: ANSI targets are deprecated')) {
      this.showANSIDeprecationWarning();
    }

    const lines = output.split('\n');

    return lines.map(result => {
      const resultsWarn = (/warning: (?<message>.*) \((?<file>.*)?:(?<line>\d+)\)/).exec(result);
      const severity = options.strict
        ? 'error'
        : 'warning';

      if (resultsWarn) {
        return {
          severity: severity,
          excerpt: resultsWarn.groups.message,
          location: {
            file: resultsWarn.groups.file,
            position: atomLinter.generateRange(textEditor, parseInt(resultsWarn.groups.line) - 1),
          }
        };
      }
    }).filter(item => item);
  }
};
