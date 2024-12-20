// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

// module.exports = function override(config, env) {
//   // Adding polyfill plugin
//   config.plugins = [
//     ...config.plugins,
//     new NodePolyfillPlugin()
//   ];

//   // Resolve Node.js core modules
//   config.resolve.fallback = {
//     ...config.resolve.fallback,
//     fs: false,
//     path: require.resolve("path-browserify"),
//     crypto: require.resolve("crypto-browserify"),
//     stream: require.resolve("stream-browserify"),
//   };

//   return config;
// };



const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config, env) {
  // Add Node.js polyfills
  config.plugins = [
    ...config.plugins,
    new NodePolyfillPlugin(),
  ];

  // Ensure fallback for Node.js modules
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    path: require.resolve("path-browserify"),
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer/"),
  };

  return config;
};
