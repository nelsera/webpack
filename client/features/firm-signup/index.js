import './firm-signup.less';

import ang from 'angular';

class FirmSignupController {
  /** @ngInject */
  constructor($rest) {
    this.title = 'Adicionar empresa cliente';
    this.tab = 1;

    this.days = this.getDays();
    this.states = $rest.getStates.query(res => {
      return res;
    });
  }

  getDays(day = 7, days = []) {
    for (; day <= 90; ++day) {
      days.push(day);
    }

    return days;
  }
}

export default ang.module('client.FirmSignup', [])
  .controller('FirmSignup', FirmSignupController)
  .name;
