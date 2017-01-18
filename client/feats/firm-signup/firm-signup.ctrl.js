import $ from 'jquery';

export default class FirmSignup {
  /** @ngInject */
  constructor($rootScope, $rest, $log) {
    $rootScope.title = this.title = 'Adicionar empresa cliente';

    this.tab = 1;
    this.rest = $rest;
    this.log = $log;

    this.days = this.getDays();
    this.states = $rest.getStates();

    this.fields = {
      formInfos: {},
      formManager: {},
      formBilling: {},
      taxiProduct: {
        revenues: {},
        collection: {}
      }
    };

    $rest.getCompanyGlobal().then(data => {
      $log.debug(data);
      this.formInfosSizes = data.Sizes;
      this.taxiContractTypes = data.TaxiContractTypes;
      this.taxiTaxTypes = data.TaxiTaxTypes;
    });
  }

  getDays(day = 7, days = []) {
    for (; day <= 90; ++day) {
      days.push(day);
    }

    return days;
  }

  getAdress(context) {
    this.rest.getAdress(this.fields[context].zipcode).then(res => {
      this.log.debug(res);
      if (res.data.Street) {
        this.fields[context].street = res.data.Street;
        this.fields[context].district = res.data.District.Name;
        this.fields[context].city = res.data.City.Name;
        this.fields[context].state = res.data.State.Code;
        $(`[ng-model="fs.fields.${context}.number"]`).focus();
      }
    });
  }
}
