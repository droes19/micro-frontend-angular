const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'micro-frontend-angular',

  exposes: {
    // './Component': './src/app/app.component.ts',
    './mfaRoutes': './src/app/app.routes.ts',
    './Dashboard':'./src/app/dashboard/dashboard.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
