const packageName = 'linter-makensis';

const configSchema = {
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
    default: "Safe PPO",
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
        type: 'array',
        items: {
          type: 'string'
        },
        default: [],
        order: 1
      },
      postExecute: {
        title: 'Append code',
        description: 'Comma-separated list of commands to be appended to your script',
        type: 'array',
        items: {
          type: 'string'
        },
        default: [],
        order: 2
      },
      useWine: {
        title: 'Use Wine',
        description: 'When on a non-Windows platform, you can compile installers using [Wine](https://www.winehq.org/). Make sure to set up `pathToMakensis` accordingly or add `makensis` to the Wine\'s PATH environmental variable.',
        type: 'boolean',
        default: false,
        order: 3
      },
      muteANSIDeprecationWarning: {
        title: 'Mute Deprecation Warning',
        description: 'Mutes ANSI deprecation warning introduced in NSIS v3.05',
        type: 'boolean',
        default: false,
        order: 4
      },
      clearConsole: {
        title: "Clear Console",
        description: "Clears the console prior to linting. Only works when in developer mode.",
        type: "boolean",
        default: false,
        order: 5
      }
    }
  }
};

export {
  configSchema,
  packageName
}
