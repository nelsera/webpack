/** @ngInject */
export default function routes($stateProvider) {
  $stateProvider
    .state('entrar', {
      url: '/entrar',
      template: require('./$auth.tpl'),
      controller: 'Auth',
      controllerAs: 'au'
    });
}
