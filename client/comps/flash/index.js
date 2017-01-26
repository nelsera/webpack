import ang from 'angular';

class Flash {
  /** @ngInject */
  constructor($rootScope, $timeout) {
    this.set = data => {
      $rootScope.flash = data;
      $timeout(() => $rootScope.flash = {}, 5000);
    };
  }

  success(i) {
    return this.set({
      message: i,
      type: 'success',
      info: 'Parabéns'
    });
  }

  danger(i) {
    return this.set({
      message: i,
      type: 'danger',
      info: 'Atenção'
    });
  }
}

export default ang.module('client.Flash', [])
  .service('flash', Flash)
  .name;
