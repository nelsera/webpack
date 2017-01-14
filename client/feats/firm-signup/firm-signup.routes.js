routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('empresa/nova', {
      url: '/empresa/nova',
      template: require('./templates/index.html'),
      controller: 'FirmSignup',
      controllerAs: 'fs'
    });
}
