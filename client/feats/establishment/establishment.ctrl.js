import $ from 'jquery';

export default class Establishment {
  /** @ngInject */
  constructor($rootScope, $rest) {
    this.xhr = $rest;
    this.states = $rest.getStates();
    $rootScope.title = this.title = 'Adicionar estabelecimento';

    this.setTab(1);

    this.Infos = {
      ProductId: 1
    };
    this.Address = {};
    this.Commercial = {};
  }

  getDays(day, dayEnd, days = []) {
    for (; day <= dayEnd; ++day) {
      days.push({
        name: day,
        value: day
      });
    }

    return days;
  }

  getAddress(scope) {
    this.xhr.getAddress(this[scope].Zipcode).then(res => {
      if (res.Street) {
        this[scope] = res;
        $(`[ng-model="etb.${scope}.Number"]`).focus();
      }
    });
  }

  formatPhone(e) {
    return (e) ? {Ddd: e.slice(0, 2), Number: e.slice(2)} : null;
  }

  nextStep(isValid, step) {
    return isValid ? this.setTab(step) : false;
  }

  setTab(tab) {
    return this.tab = tab;
  }

  signIn(Infos) {
    Infos.ProductId = 1;
  }
}
