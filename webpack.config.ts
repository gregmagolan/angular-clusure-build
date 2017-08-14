import 'ts-helpers';

import {AotPlugin} from '@ngtools/webpack';
import * as path from 'path';
import * as webpack from 'webpack';

const copyWebpackPlugin: any = require('copy-webpack-plugin');

function root(sub: string): string {
  return path.join(path.resolve(), sub);
}

// ============================================================================

const webpackConfig: webpack.Configuration = {
  devtool: 'source-map',
  entry: { app: root('src/main.server.ts') },
  target: 'node',
  resolve: { extensions: ['.ts', '.js'] },
  output: { path: root('dist'), pathinfo: true, filename: 'server.js' },
  stats: { warnings: false },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test: /\.(jp?g|png|gif)$/,
        loader: 'file-loader',
        options: { hash: 'sha512', digest: 'hex', name: 'images/[hash].[ext]' }
      },
      {
        test: /\.(eot|woff2?|svg|ttf|otf)([\?]?.*)$/,
        loader: 'file-loader',
        options: { hash: 'sha512', digest: 'hex', name: 'fonts/[hash].[ext]' }
      },
      { test: /\.css$/, use: ['to-string-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['to-string-loader', 'css-loader', 'sass-loader'] },
      { test: /\.less$/, use: ['to-string-loader', 'css-loader?-url', 'less-loader'] }
    ]
  },
  plugins: [
    new copyWebpackPlugin(
      [
        { from: 'src/index.html', to: root('dist') },
        { from: 'node_modules/zone.js/dist/zone.min.js', to: root('dist') },
      ],
      {
        debug: 'warning', // set to 'info' to for copy debug output
        ignore: [], // set any files to ignore here
      }),
    new AotPlugin({ tsConfigPath: root('src/tsconfig.webpack.server.json') }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
  ]
};

// ============================================================================

function main(): void {
  console.log(`Running build for server with AoT compilation...`);
}

main();

module.exports = (env: any): void => {
  console.log(env);
};

module.exports = webpackConfig;
