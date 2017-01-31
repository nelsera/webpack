export default class EstablishmentLs {
  /** @ngInject */
  constructor($rest, $rootScope) {
    $rootScope.title = this.title = 'Relatório de estab. credenciado';

    this.rest = $rest;
    this.rest.getStates().then(res => this.states = res);
    this.getter();
    this.query = {};
  }

  getter(obj = {}) {
    this.rest.searchEstablishment(obj).then(res => {
      this.Estabs = res.Data;
      this.Pagination = res.Pagination;
    });
  }

  goPage(pag) {
    this.getter(Object.assign(
      this.query,
      {'filter.page': pag}
    ));
  }

  getInBigode(...q) {
    this.query = {
      'filter.state': q[3]
    };
    this.query[q[1]] = q[0];
    this.query[q[2]] = true;

    this.getter(this.query);
  }
}
