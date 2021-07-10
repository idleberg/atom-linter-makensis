import { CompilerOptions } from 'makensis';
import { name } from '../package.json';
import config from './config';
import { TextEditor } from 'atom';
import open from 'open';

async function findErrors(textEditor: TextEditor, output: string): Promise<unknown[]> {
  const atomLinter = await import('atom-linter');
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
}

async function findWarnings(textEditor: TextEditor, output: string, options: CompilerOptions): Promise<unknown[]> {
  const atomLinter = await import('atom-linter');

  if (!config.get('advanced.muteANSIDeprecationWarning') && output.includes('7998: ANSI targets are deprecated')) {
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

function showANSIDeprecationWarning(): void {
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
          atom.config.set(`${name}.advanced.muteANSIDeprecationWarning`, true);

          notification.dismiss();
        }
      }
    ]
  });
}

export {
  findErrors,
  findWarnings,
  showANSIDeprecationWarning
};
