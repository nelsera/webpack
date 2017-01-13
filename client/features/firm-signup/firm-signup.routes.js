export default function routes($stateProvider) {
  $stateProvider
    .state('empresa/nova', {
      url: '/empresa/nova',
      template: require('./templates'),
      controller: 'FirmSignup',
      controllerAs: 'fs'
    });
}
