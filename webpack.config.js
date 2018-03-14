const path = require('path');
const slsw = require('serverless-webpack');
// var nodeExternals = require('webpack-node-externals');

module.exports = {
  // entry: slsw.lib.entries,
  entry: {
    'handlers/Http/GET/get-handler': './handlers/Http/GET/get-handler.ts',
    'handlers/Http/POST/post-handler': './handlers/Http/POST/post-handler.ts',
    'handlers/Schedule/minute-handler': './handlers/Schedule/minute-handler.ts',
    'handlers/Trigger/MyTrigger/trigger-handler':
      './handlers/Trigger/MyTrigger/trigger-handler.ts',
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  //   externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
};
