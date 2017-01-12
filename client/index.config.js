export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/'
    })
    .state('empresa/nova', {
      url: '/empresa/nova',
      template: require('./features/firm-signup/templates/firm-signup.html'),
      controller: 'FirmSignup',
      controllerAs: 'fs'
    });
}
