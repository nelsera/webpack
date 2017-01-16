routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('entrar', {
      url: '/entrar',
      template: require('./index.html'),
      controller: 'Auth',
      controllerAs: 'au'
    });
}
