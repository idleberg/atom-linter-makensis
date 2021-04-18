// Dependencies
import { compile } from 'makensis';
import { CompositeDisposable } from 'atom';
import { configSchema, packageName } from './config';
import { platform } from 'os';
import { satisfyDependencies } from 'atom-satisfy-dependencies';
import console from './log';
import Util from './util';

export default {
  config: configSchema,

  async activate(): Promise<void> {
    this.subscriptions = new CompositeDisposable;

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'linter-MakeNSIS:open-settings': () => Util.openSettings()
    }));

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'linter-MakeNSIS:satisfy-dependencies': () => satisfyDependencies(packageName)
    }));

    if (!atom.inSpecMode() && Util.getConfig('manageDependencies')) {
      satisfyDependencies(packageName);
    }

    this.cleanUp();
  },

  deactivate(): void {
    this.subscriptions?.dispose();
    this.subscriptions = null;
  },

  cleanUp(): void {
    atom.config.unset('linter-makensis.ppoMode');
  },

  provideLinter(): unknown {
    return {
      name: 'linter-makensis',
      grammarScopes: ['source.nsis'],
      scope: 'file',
      lintsOnChange: false,
      lint: async (textEditor) => {
        const filePath = textEditor.getPath();
        const fileContents = textEditor.getText();
        const preExecute = Util.getConfig('advanced.preExecute');
        const postExecute = Util.getConfig('advanced.postExecute');
        const useWine = platform() !== 'win32' && Util.getConfig('advanced.useWine')
          ? true
          : false;

        const options = {
          preExecute: Array.isArray(preExecute)
            ? preExecute
            : [],
          postExecute: Array.isArray(postExecute)
            ? postExecute
            : [],
          PPO: null,
          safePPO: null,
          pathToMakensis: Util.getConfig('pathToMakensis'),
          strict: Util.getConfig('strictMode'),
          verbose: 2,
          wine: useWine
        };

        const nullDevice = platform() === 'win32'
          ? 'NUL'
          : '/dev/null/';

        switch (String(Util.getConfig('preprocessMode')).trim()) {
          case 'PPO':
            options.PPO = true;
            break;
          case 'Safe PPO':
            options.safePPO = true;
            break;
          default:
            options.postExecute.push(`OutFile ${nullDevice}`);
            break;
          }

        if (Util.getConfig('overrideCompression')) {
          options.preExecute.unshift(`SetCompressor /FINAL zlib`);
          options.postExecute.push(`SetCompress off`);
        }

        if (Util.getConfig('advanced.clearConsole')) {
          console.clear();
        }

        const output = await compile(filePath, options)

        console.info(`Compiler Options:`, options);
        console.info(`Output:`, output);

        if (textEditor.getText() !== fileContents) {
            console.warn(`File has changed since the lint was triggered`);

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
      }
    }
  }
};
