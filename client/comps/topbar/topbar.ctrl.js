export default class Topbar {
  /** @ngInject */
  constructor($location) {
    this.location = $location;
  }

  logOut() {
    localStorage.removeItem('wappaAdm');
    this.location.path('/entrar');
  }
}
