// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");
// const share = mf.share;

// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(
//   path.join(__dirname, 'tsconfig.json'),
//   [/* mapped paths to share */]);

// module.exports = {
//   output: {
//     uniqueName: "remote-app",
//     publicPath: "auto",
//     scriptType: "text/javascript"
//   },
//   optimization: {
//     runtimeChunk: false
//   },
//   resolve: {
//     alias: {
//       ...sharedMappings.getAliases(),
//     }
//   },
//   experiments: {
//     outputModule: true
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       library: { type: "module" },

//       // For remotes (please adjust)
//       name: "remote-app",
//       filename: "remoteEntry.js",
//       exposes: {
//           './Module': './src/app/details/details.module.ts',
//       },        

//       // For hosts (please adjust)
//       // remotes: {
//       //     "mfe1": "http://localhost:3000/remoteEntry.js",

//       // },

//       shared: share({
//         '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//         '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//         '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//         '@angular/forms': { singleton: true, strictVersion: true, requiredVersion: 'auto' },

//         // ...sharedMappings.getDescriptors()
//       })

//     }),
//     sharedMappings.getPlugin()
//   ],
// };




const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'remote-app',

  exposes: {
    './Module': './src/app/details/details.module.ts', //updated value
    './Component': './src/app/details/details.component.ts' //updated value
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
  },

});