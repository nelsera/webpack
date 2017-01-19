import $ from 'jquery';

export default class FirmSignup {
  /** @ngInject */
  constructor($rootScope, $rest) {
    const fs = this;

    $rootScope.title = fs.title = 'Adicionar empresa cliente';

    fs.setTab(4);

    fs.rest = $rest;

    fs.days = fs.getDays(7, 90);
    fs.daysMonth = fs.getDays(1, 31);
    fs.states = $rest.getStates();

    fs.fields = {
      formInfos: {},
      formManager: {},
      formBilling: {},
      taxiProduct: {
        revenues: {},
        collection: {}
      }
    };

    $rest.getCompanyGlobal().then(data => {
      fs.formInfosSizes = data.Sizes;
      fs.taxiContractTypes = data.TaxiContractTypes;
      fs.taxiTaxTypes = data.TaxiTaxTypes;
    });

    fs.setRange = () => {
      fs.fields.taxiProduct.begin = undefined;
      fs.fields.taxiProduct.end = undefined;
      fs.fields.taxiProduct.close = undefined;
    };
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

  getAdress(context) {
    this.rest.getAdress(this.fields[context].zipcode).then(res => {
      if (res.Street) {
        this.fields[context].street = res.Street;
        this.fields[context].district = res.District.Name;
        this.fields[context].city = res.City.Name;
        this.fields[context].state = res.State.Code;
        $(`[ng-model="fs.fields.${context}.number"]`).focus();
      }
    });
  }

  nextStep(isValid, step) {
    return isValid ? this.setTab(step) : false;
  }

  setTab(tab) {
    return this.tab = tab;
  }

  signIn() {
    this.rest.signIn({
      Id: 0,
      Name: 'string',
      Email: 'string',
      Website: 'string',
      Trade: 'string',
      Registration: {
        City: 'string',
        State: 'string'
      },
      Cnpj: 'string',
      Address: {
        Street: 'string',
        Number: 'string',
        Complement: 'string',
        Zipcode: 'string',
        District: {
          Id: 0,
          Name: 'string'
        },
        City: {
          Id: 0,
          Name: 'string'
        },
        State: {
          Id: 0,
          Code: 'string'
        }
      },
      Phone: {
        Ddd: 'string',
        Number: 'string'
      },
      Size: 0,
      Manager: {
        Name: 'string',
        Email: 'string',
        JobTitle: 'string',
        Department: 'string',
        PrivatePhone: {
          Ddd: 'string',
          Number: 'string'
        },
        CommercialPhone: {
          Ddd: 'string',
          Number: 'string'
        },
        Address: {
          Street: 'string',
          Number: 'string',
          Complement: 'string',
          Zipcode: 'string',
          District: {
            Id: 0,
            Name: 'string'
          },
          City: {
            Id: 0,
            Name: 'string'
          },
          State: {
            Id: 0,
            Code: 'string'
          }
        }
      },
      Billing: {
        ResponsibleOne: {
          Name: 'string',
          Email: 'string'
        },
        ResponsibleTwo: {
          Name: 'string',
          Email: 'string'
        },
        Address: {
          Street: 'string',
          Number: 'string',
          Complement: 'string',
          Zipcode: 'string',
          District: {
            Id: 0,
            Name: 'string'
          },
          City: {
            Id: 0,
            Name: 'string'
          },
          State: {
            Id: 0,
            Code: 'string'
          }
        }
      },
      ShippingAddress: {
        Street: 'string',
        Number: 'string',
        Complement: 'string',
        Zipcode: 'string',
        District: {
          Id: 0,
          Name: 'string'
        },
        City: {
          Id: 0,
          Name: 'string'
        },
        State: {
          Id: 0,
          Code: 'string'
        }
      },
      PaymentSlip: {
        Charge: true,
        Send: true,
        Cost: 0
      },
      TaxiProduct: {
        DeadlineInDays: 0,
        Contract: 0,
        Tax: {
          Type: 0,
          Value: 0
        },
        Period: {
          Start: 0,
          End: 0
        },
        ClosesInDays: 0,
        RedundancyDay: 0,
        Credit: {
          Limit: 0,
          Total: 0
        },
        Value: 0
      },
      Status: {
        Active: true,
        Blocked: true
      }
    });
  }

  getFormInfos(data) {
    const address = (obj = {}) => {
      return this.fields.formBilling = {
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
