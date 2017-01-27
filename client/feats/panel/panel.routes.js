/** @ngInject */
export default function routes($stateProvider) {
  $stateProvider
    .state('painel', {
      url: '/painel',
      template: require('./$panel.tpl'),
      controller: 'Panel',
      controllerAs: 'pn'
    });
}
