import $ from 'jquery';

export default class Company {
  /** @ngInject */
  constructor($rootScope, $rest, flash, $state, $log) {
    $rootScope.title = this.title = 'Adicionar empresa';

    this.flash = flash;
    this.setTab(1);

    this.xhr = $rest;

    this.days = this.getDays(7, 90);
    this.daysMonth = this.getDays(1, 31);

    $rest.getStates().then(res => this.states = res);

    this.Infos = {
      Address: null,
      Phone: {
        Ddd: null,
        Number: null
      }
    };
    this.Manager = {
      CommercialPhone: {
        Ddd: null,
        Number: null
      },
      PrivatePhone: {
        Ddd: null,
        Number: null
      }
    };
    this.Billing = {
      Address: null,
      ResponsibleOne: {
        Phone: {
          Ddd: null,
          Number: null
        }
      },
      ResponsibleTwo: {
        Phone: {
          Ddd: null,
          Number: null
        }
      }
    };
    this.TaxiProduct = {};

    $rest.getCompanyGlobal().then(res => {
      this.InfosSizes = res.Sizes;
      this.InfosSegments = res.Segments;
      this.InfosCategories = res.Categories;
      this.TaxiTaxTypes = res.TaxiTaxTypes;
      this.PostSaleResponsibles = res.PostSaleResponsible;
      this.CommercialSaleResponsibles = res.CommercialSaleResponsible;
    });

    this.route = $state;
    this.log = $log;
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
    this.xhr.getAddress(this[scope].Address.Zipcode).then(res => {
      this.log.debug(res);
      if (res.Street) {
        this[scope].Address = res;
        $(`[ng-model="cpn.${scope}.Address.Number"]`).focus();
      }
    });
  }

  nextStep(isValid, step) {
    return isValid ? this.setTab(step) : false;
  }

  setTab(tab) {
    return this.tab = tab;
  }

  formatPhone(e) {
    return (e) ? {Ddd: e.slice(0, 2), Number: e.slice(2)} : null;
  }

  signIn(Infos, Manager, Billing, PaymentSlip, TaxiProduct) {
    Infos.Phone = this.formatPhone(Infos.Phone.Number);
    Manager.CommercialPhone = this.formatPhone(Manager.CommercialPhone.Number);
    Manager.PrivatePhone = this.formatPhone(Manager.PrivatePhone.Number);
    Billing.ResponsibleOne = this.formatPhone(Billing.ResponsibleOne.Phone.Number);
    Billing.ResponsibleTwo = this.formatPhone(Billing.ResponsibleTwo.Phone.Number);

    TaxiProduct.Contract = 2;

    const req = Object.assign(Infos, {Manager}, {Billing}, {PaymentSlip}, {TaxiProduct});

    this.xhr.company(req)
    .then(() => {
      this.flash.success('A empresa foi cadastrada.');
    })
    .catch(() => {
      this.flash.danger('Houve um erro no cadastro.');
    })
    .finally(() => {
      this.route.reload();
    });
  }

  getInfos(req) {
    req.Zipcode = req.Zipcode.replace('-', '');
    const address = (obj = {}) => this.Billing.Address = obj;

    return this.switchAddress ? address(req) : address();
  }
}
