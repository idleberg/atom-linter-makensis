// Dependencies
import { CompositeDisposable } from 'atom';
import config from './config';
import { name } from '../package.json';
import { platform } from 'os';
import console from './log';
import micromatch from 'micromatch';

export default {
  config: config.schema,

  async activate(): Promise<void> {
    this.subscriptions = new CompositeDisposable;

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'linter-MakeNSIS:open-settings': () => config.open()
    }));

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'linter-MakeNSIS:satisfy-dependencies': async () => {
        const { satisfyDependencies } = await import('atom-satisfy-dependencies');
        satisfyDependencies(name);
      }
    }));

    if (!atom.inSpecMode() && config.get('manageDependencies')) {
      const { satisfyDependencies } = await import('atom-satisfy-dependencies');
      satisfyDependencies(name);
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
      lintsOnChange: config.get('lintsOnSave') || false,
      lint: async (textEditor) => {
        const filePath = textEditor.getPath();
        const excludedFiles = config.get('excludedFiles') || [];

        if (excludedFiles?.length) {
          if (micromatch.isMatch(filePath, excludedFiles)) {
            console.log(`Skipping lint for ${filePath}, found in exclude list`);
            return;
          }
        }

        const fileContents = textEditor.getText();
        const preExecute = config.get('advanced.preExecute');
        const postExecute = config.get('advanced.postExecute');
        const useWine = platform() !== 'win32' && config.get('advanced.useWine')
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
          pathToMakensis: config.get('pathToMakensis'),
          strict: config.get('strictMode'),
          verbose: 2,
          wine: useWine
        };

        const nullDevice = platform() === 'win32'
          ? 'NUL'
          : '/dev/null/';

        switch (String(config.get('preprocessMode')).trim()) {
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

        if (config.get('overrideCompression')) {
          options.preExecute.unshift(`SetCompressor /FINAL zlib`);
          options.postExecute.push(`SetCompress off`);
        }

        if (config.get('advanced.clearConsole')) {
          console.clear();
        }

        const { compile } = await import('makensis');
        const output = await compile(filePath, options)

        console.info(`Compiler Options:`, options);
        console.info(`Output:`, output);

        if (textEditor.getText() !== fileContents) {
            console.warn(`File has changed since the lint was triggered`);

          return null;
        }

        const results = [];

        if (output.stdout) {
          const { findWarnings } = await import('./util');
          const resultsWarn = await findWarnings(textEditor, output.stdout, options);
          if (resultsWarn) results.push(...resultsWarn);
        }

        if (output.stderr) {
          const { findErrors } = await import('./util');
          const resultsErr = await findErrors(textEditor, output.stderr);
          if (resultsErr) results.push(...resultsErr);
        }

        if (results.length === 0) return null;

        return results;
      }
    }
  }
};
