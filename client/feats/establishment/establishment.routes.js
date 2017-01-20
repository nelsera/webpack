/** @ngInject */
export default function routes($stateProvider) {
  $stateProvider
    .state('painel.estabelecimento/novo', {
      url: '/estabelecimento/novo',
      template: require('./index.html'),
      controller: 'Establishment',
      controllerAs: 'etb'
    });
}
