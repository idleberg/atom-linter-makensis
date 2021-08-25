const presets = [
  ['@babel/preset-env', {
      targets: {
          'electron': 6
      },
      modules: 'cjs'
  }]
];

const plugins = [
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-optional-chaining'
];

// if (process.env.BABEL_ENV === 'development') {
  plugins.push('@babel/plugin-transform-modules-commonjs');
// }

module.exports = {
  presets: presets,
  plugins: plugins,
  exclude: 'node_modules/**'
};
