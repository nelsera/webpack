export default function routes($stateProvider) {
  $stateProvider
    .state('empresa/nova', {
      url: '/empresa/nova',
      template: require('./firm-signup.html'),
      controller: 'firmSignup',
      controllerAs: 'fs'
    });
}
