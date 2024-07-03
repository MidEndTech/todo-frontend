module.exports = {
    resolve: {
        fallback: {
          "zlib": false,
          "querystring": false,
          "path": false,
          "url": false
        }
      }
//     resolve: {
//         fallback: {process: require.resolve('process/browser')},
//     },
//     resolve: {
//         fallback: {
//           "zlib": require.resolve("browserify-zlib")
//         }
//       },
//       resolve: {
//         fallback: {
//           "zlib": false
//         }
//       },
//       resolve: {
//         fallback: {
//           "querystring": require.resolve("querystring-es3")
//         }
//       },
 };

