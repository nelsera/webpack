export default class Company {

  /** @ngInject */
  constructor($rootScope, $rest, flash, $state, register) {
    $rootScope.title = this.title = 'Adicionar empresa';

    this.reg = register;
    this.flash = flash;
    this.getAddress = register.getAddress;
    this.setTab(1);
    this.xhr = $rest;
    this.days = register.getDays(7, 90);
    this.daysMonth = register.getDays(1, 31);
    this.route = $state;

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
  }

  nextStep(isValid, step) {
    return isValid ? this.setTab(step) : false;
  }

  setTab(tab) {
    return this.tab = tab;
  }

  signIn(Infos, Manager, Billing, PaymentSlip, TaxiProduct) {
    Infos.Phone = this.reg.formatPhone(Infos.Phone.Number);
    Manager.CommercialPhone = this.reg.formatPhone(Manager.CommercialPhone.Number);
    Manager.PrivatePhone = this.reg.formatPhone(Manager.PrivatePhone.Number);
    Billing.ResponsibleOne = this.reg.formatPhone(Billing.ResponsibleOne.Phone.Number);
    Billing.ResponsibleTwo = this.reg.formatPhone(Billing.ResponsibleTwo.Phone.Number);

    TaxiProduct.Contract = 2;

    const req = Object.assign(Infos, {Manager}, {Billing}, {PaymentSlip}, {TaxiProduct});

    this.xhr.company(req)
    .then(() => {
      this.flash.success('A empresa foi cadastrada com sucesso.');
    })
    .catch(() => {
      this.flash.danger('Houve um erro no cadastro. Tente novamente');
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
