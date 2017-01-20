/** @ngInject */
export default function routes($stateProvider) {
  $stateProvider
    .state('painel.empresa/nova', {
      url: '/empresa/nova',
      template: require('./index.html'),
      controller: 'Company',
      controllerAs: 'cpn'
    });
}
