export default function routes($stateProvider) {
  $stateProvider
    .state('empresa/nova', {
      url: '/empresa/nova',
      template: require('./templates/firm-signup.html'),
      controller: 'firmSignup',
      controllerAs: 'fs'
    });
}
