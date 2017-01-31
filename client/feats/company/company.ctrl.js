export default class Company {

  /** @ngInject */
  constructor($rootScope, $rest, flash, $state, register, $stateParams) {
    $rootScope.title = this.title = 'Adicionar empresa';

    this.tab = 1;

    this.reg = register;
    this.flash = flash;
    this.getAddress = register.getAddress;
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

    return $stateParams.Id ?
      this.edit($stateParams.Id) :
      null;
  }

  signIn(Infos, Manager, Billing, PaymentSlip, TaxiProduct) {
    Infos.Phone = this.reg.formatPhone(Infos.Phone.Number);

    Manager.CommercialPhone = this.reg.formatPhone(Manager.CommercialPhone.Number);
    Manager.PrivatePhone = this.reg.formatPhone(Manager.PrivatePhone.Number);

    Billing.ResponsibleOne = this.reg.formatPhone(Billing.ResponsibleOne.Phone.Number);
    Billing.ResponsibleTwo = this.reg.formatPhone(Billing.ResponsibleTwo.Phone.Number);

    TaxiProduct.Contract = 2;

    const req = Object.assign(
      Infos,
      {Manager},
      {Billing},
      {PaymentSlip},
      {TaxiProduct}
    );

    this.xhr.saveCompany(req)
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
    const address = (obj = {}) => this.Billing.Address = obj;

    return this.switchAddress ? address(req) : address();
  }

  edit(Id) {
    this.xhr.getCompany(Id).then(res => {
      res.Phone.Number = res.Phone.Ddd + res.Phone.Number;
      res.Manager.CommercialPhone.Number = res.Manager.CommercialPhone.Ddd + res.Manager.CommercialPhone.Number;

      res.Manager.PrivatePhone = res.Manager.PrivatePhone || {};
      res.Manager.PrivatePhone.Number = res.Manager.PrivatePhone.Ddd + res.Manager.PrivatePhone.Number;

      res.Billing.ResponsibleOne.Phone = res.Billing.ResponsibleOne.Phone || {};
      res.Billing.ResponsibleOne.Phone.Number = res.Billing.ResponsibleOne.Phone.Ddd + res.Billing.ResponsibleOne.Phone.Number;

      res.Billing.ResponsibleTwo.Phone = res.Billing.ResponsibleTwo.Phone || {};
      res.Billing.ResponsibleTwo.Phone.Number = res.Billing.ResponsibleTwo.Phone.Ddd + res.Billing.ResponsibleTwo.Phone.Number;

      this.Infos = res;
      this.Infos.Size = res.Size;
      this.Manager = res.Manager;
      this.Billing = res.Billing;
      this.TaxiProduct = res.TaxiProduct;
    });
  }
}
