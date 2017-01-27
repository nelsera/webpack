export default class Establishment {
  /** @ngInject */
  constructor($rootScope, $rest, flash, $state, register) {
    $rootScope.title = this.title = 'Adicionar estabelecimento';

    this.xhr = $rest;
    this.getAddress = register.getAddress;
    $rest.getStates().then(res => this.states = res);

    this.route = $state;
    this.flash = flash;

    this.daysRefund = register.getDays(4, 30);
    this.daysReceiving = register.getDays(3, 100);

    this.setTab(1);

    this.Infos = {
      ProductId: 1
    };
    this.Address = {};
    this.Commercial = {};
  }

  nextStep(isValid, step) {
    return isValid ? this.setTab(step) : false;
  }

  setTab(tab) {
    return this.tab = tab;
  }

  signIn(Infos) {
    Infos.ProductId = 1;

    this.flash.success('O estabelecimento foi cadastrado com sucesso.');
    this.route.reload();
  }
}
