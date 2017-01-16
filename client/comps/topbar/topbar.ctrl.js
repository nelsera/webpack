export default class Topbar {
  /** @ngInject */
  constructor($log) {
    this.name = 'Topbar';
    this.log = $log;
  }

  logOut() {
    this.log.debug('logout');
  }
}
