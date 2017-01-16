export default class Panel {
  /** @ngInject */
  constructor($rootScope) {
    $rootScope.title = this.title = 'Painel';
  }
}
