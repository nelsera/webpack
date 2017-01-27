import $ from 'jquery';
import ang from 'angular';

class Register {

  formatPhone(e) {
    return (e) ? {Ddd: e.slice(0, 2), Number: e.slice(2)} : null;
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

  getAddress(e, scope) {
    if (!e.target.value) {
      return;
    }

    this.xhr.getAddress(e.target.value).then(Address => {
      if (!Address.Street) {
        return;
      }

      Address.Zipcode = Address.Zipcode.replace('-', '');

      if (this[scope].Address) {
        this[scope].Address = Address;
      } else {
        this[scope] = Address;
      }

      $(e.target).closest('form')
        .find('[ng-model$="Address.Number"]').focus();
    });
  }

}

export default ang.module('client.Register', [])
  .service('register', Register)
  .name;
