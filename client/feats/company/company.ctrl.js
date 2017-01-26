import $ from 'jquery';

export default class Company {
  /** @ngInject */
  constructor($rootScope, $rest, flash, $state) {
    $rootScope.title = this.title = 'Adicionar empresa';

    this.flash = flash;

    this.setTab(1);

    this.xhr = $rest;

    this.days = this.getDays(7, 90);
    this.daysMonth = this.getDays(1, 31);
    this.states = $rest.getStates();

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

  signIn(Infos, Manager, Billing, PaymentSlip, TaxiProduct) {
    Infos.Phone.Ddd = Infos.Phone.Number.slice(0, 2);
    Infos.Phone.Number = Infos.Phone.Number.slice(2);

    Manager.CommercialPhone.Ddd = Manager.CommercialPhone.Number.slice(0, 2);
    Manager.CommercialPhone.Number = Manager.CommercialPhone.Number.slice(2);

    if (Manager.PrivatePhone.Number) {
      Manager.PrivatePhone.Ddd = Manager.PrivatePhone.Number.slice(0, 2);
      Manager.PrivatePhone.Number = Manager.PrivatePhone.Number.slice(2);
    }

    Billing.ResponsibleOne.Phone.Ddd = Billing.ResponsibleOne.Phone.Number.slice(0, 2);
    Billing.ResponsibleOne.Phone.Number = Billing.ResponsibleOne.Phone.Number.slice(2);

    if (Billing.ResponsibleTwo.Phone.Number) {
      Billing.ResponsibleTwo.Phone.Ddd = Billing.ResponsibleTwo.Phone.Number.slice(0, 2);
      Billing.ResponsibleTwo.Phone.Number = Billing.ResponsibleTwo.Phone.Number.slice(2);
    }

    TaxiProduct.Contract = 2;

    const data = Infos;
    data.Manager = Manager;
    data.Billing = Billing;
    data.PaymentSlip = PaymentSlip;
    data.TaxiProduct = TaxiProduct;

    this.xhr.company(data)
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

  getInfos(data) {
    data.Zipcode = data.Zipcode.replace('-', '');
    const address = (obj = {}) => this.Billing.Address = obj;

    return this.switchAddress ? address(data) : address();
  }
}
