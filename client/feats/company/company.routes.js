/** @ngInject */
export default function routes($stateProvider) {
  $stateProvider
    .state('painel.empresa/nova', {
      url: '/empresa/nova',
      template: require('./$add.tpl'),
      controller: 'CompanyAdd',
      controllerAs: 'cp'
    })
    .state('painel.empresa/editar', {
      url: '/empresa/:Id',
      template: require('./$add.tpl'),
      controller: 'CompanyAdd',
      controllerAs: 'cp'
    })
    .state('painel.empresa', {
      url: '/empresa',
      template: require('./$ls.tpl'),
      controller: 'CompanyLs',
      controllerAs: 'cp'
    });
}
