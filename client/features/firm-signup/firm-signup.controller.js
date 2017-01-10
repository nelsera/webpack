export default class FirmSignup {

  constructor($rest) {
    this.title = 'Adicionar empresa cliente';
    this.tab = 1;

    this.states = $rest.getStates.query(res => {
      return res;
    });
  }

  days() {
    let days = [7];

    for (; days.length <= 83; ++days[days.length - 1]) {
      days.push(days[days.length - 1]);
    }

    return days;
  }
}
