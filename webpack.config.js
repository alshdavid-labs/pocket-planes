const path = require('path')
const fs = require('fs-extra')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let plugins = []

const args = {
  env: {
    local: process.argv.includes('--env:local'),
    prod: process.argv.includes('--env:prod'),
  },
  es2015: process.argv.includes('--es2015'),
  stats: process.argv.includes('--stats'),
  clean: process.argv.includes('--clean'),
}

if (args.clean) {
  fs.removeSync(path.join(__dirname, 'public', 'app')); 
  process.exit(0)
}

const useES2015 = args.es2015 ? true : false

if (args.stats) {
  plugins.push(new BundleAnalyzerPlugin())
}

const modes = {
  prod: 'production',
  dev: 'development',
}

const environments = {
  'local': 'local',
  'prod': 'production',
}

let environment = environments.local
let mode = modes.dev
if (args.env.local) {
  mode = modes.dev
  environment = environments.local
} 
if (args.env.prod) {
  mode = modes.prod
  environment = environments.prod
  process.env.NODE_ENV = modes.prod
}

module.exports = {
  entry: path.join(__dirname, '/src/gui/main.tsx'),
  mode,
  output: {
    filename: `app/${useES2015 ? 'index.es2015.js' : 'index.js'}`,
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            target: useES2015 ? 'es2015' : 'es5'
          }
        }
      }
    ]
  },
  plugins: [
    ...plugins
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~/environment': path.resolve(__dirname, 'src', 'environment', environment),
      '~': path.resolve(__dirname, 'src')
    }
  }
}
