/** @ngInject */
export default function routes($stateProvider) {
  $stateProvider
    .state('painel.estabelecimento/novo', {
      url: '/estabelecimento/novo',
      template: require('./$add.tpl'),
      controller: 'Establishment',
      controllerAs: 'etb'
    })
    .state('painel.estabelecimento', {
      url: '/estabelecimento',
      template: require('./$ls.tpl'),
      controller: 'Establishment',
      controllerAs: 'etb'
    });
}
