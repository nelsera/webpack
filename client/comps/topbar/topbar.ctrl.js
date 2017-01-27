export default class Topbar {
  /** @ngInject */
  constructor($location, $state) {
    this.location = $location;
    this.route = $state;
  }

  logOut() {
    localStorage.removeItem('wappaAdm');
    this.location.path('/entrar');
  }

  panel() {
    this.route.reload();
  }
}
