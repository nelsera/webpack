/** @ngInject */
export default function routes($stateProvider) {
  $stateProvider
    .state('painel', {
      url: '/painel',
      template: require('./index.html'),
      controller: 'Panel',
      controllerAs: 'pn'
    });
}
