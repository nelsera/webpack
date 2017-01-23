import $ from 'jquery';

export default class Company {
  /** @ngInject */
  constructor($rootScope, $rest, $log) {
    const cpn = this;
    this.log = $log;

    $rootScope.title = cpn.title = 'Adicionar empresa';

    cpn.setTab(1);

    cpn.rest = $rest;

    cpn.days = cpn.getDays(7, 90);
    cpn.daysMonth = cpn.getDays(1, 31);
    cpn.states = $rest.getStates();

    cpn.Infos = {
      Address: {}
    };
    cpn.Manager = {};
    cpn.Billing = {};
    cpn.TaxiProduct = {};

    $rest.getCompanyGlobal().then(data => {
      cpn.InfosSizes = data.Sizes;
      cpn.InfosSegments = data.Segments;
      cpn.InfosCategories = data.Categories;
      cpn.taxiContractTypes = data.TaxiContractTypes;
      cpn.taxiTaxTypes = data.TaxiTaxTypes;
      cpn.postSaleResponsibles = data.PostSaleResponsible;
      cpn.commercialSaleResponsibles = data.CommercialSaleResponsible;
    });
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

  getAddress(context) {
    this.rest.getAddress(this[context].Address.Zipcode).then(res => {
      if (res.Street) {
        this[context].Address = res;
        $(`[ng-model="cpn.${context}.Address.Number"]`).focus();
      }
    });
  }

  nextStep(isValid, step) {
    return isValid ? this.setTab(step) : false;
  }

  setTab(tab) {
    return this.tab = tab;
  }

  setRange() {
    this.TaxiProduct.Start = undefined;
    this.TaxiProduct.End = undefined;
    this.TaxiProduct.CloseInDays = undefined;
  }

  signIn(Infos, Manager, Billing, TaxiProduct) {
    this.log.debug(Infos);
    this.log.debug(Manager);
    this.log.debug(Billing);
    this.log.debug(TaxiProduct);
  }

  getInfos(data) {
    const address = (obj = {}) => {
      return this.Billing = {
        zipcode: obj.zipcode,
        street: obj.street,
        number: obj.number,
        complement: obj.complement,
        district: obj.district,
        city: obj.city,
        state: obj.state
      };
    };

    return this.switchAddress ? address(data) : address();
  }
}
