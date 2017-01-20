import $ from 'jquery';

export default class Establishment {
  /** @ngInject */
  constructor($rootScope, $rest) {
    const etb = this;

    etb.rest = $rest;
    etb.states = $rest.getStates();
    $rootScope.title = etb.title = 'Adicionar estabelecimento';

    etb.setTab(1);
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
    this.rest.getAddress(this.fields[context].zipcode).then(res => {
      if (res.Street) {
        this.fields[context].street = res.Street;
        this.fields[context].district = res.District.Name;
        this.fields[context].city = res.City.Name;
        this.fields[context].state = res.State.Code;
        $(`[ng-model="etb.fields.${context}.number"]`).focus();
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
    this.fields.taxiProduct.begin = undefined;
    this.fields.taxiProduct.end = undefined;
    this.fields.taxiProduct.close = undefined;
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
