var path = require("path");
var webpack = require('webpack');

module.exports = {
  webpack: {
    entry: './app/scripts/index.js',
    output: {
      filename: 'bundle.js'
    },

    plugins: [
      new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
      )
    ],

    module: {
      loaders: [
        { test: /\.(tag)$/, loader: "tag" },
      ]
    },

    resolve: {
      modulesDirectories: ['bower_components', 'node_modules'],
      extensions: ['', '.js']
    }
  }
}
