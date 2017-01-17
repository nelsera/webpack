export default class FirmSignup {
  /** @ngInject */
  constructor($rootScope, $rest) {
    $rootScope.title = this.title = 'Adicionar empresa cliente';

    this.tab = 1;

    this.days = this.getDays();
    this.states = $rest.getStates();

    this.fields = {};
  }

  getDays(day = 7, days = []) {
    for (; day <= 90; ++day) {
      days.push(day);
    }

    return days;
  }
}
