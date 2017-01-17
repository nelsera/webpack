import ang from 'angular';

import menu from './menu.mock';
import states from './states.mock';

class Rest {
  /** @ngInject */
  constructor($http) {
    this.xhr = $http;
  }

  getToken(data) {
    return this.xhr.post('https://dev-auth.wappa.com.br/api/core/connect/token', data, {
      headers: {'content-type': 'application/x-www-form-urlencoded'}
    });
  }

  getAdress(zipcode) {
    return this.xhr.get(`https://dev-adm-api.wappa.com.br/api/address?zipcode=${zipcode}`);
  }

  getMenu() {
    return menu;
  }

  getStates() {
    return states;
  }
}

export default ang.module('client.$rest', [])
  .service('$rest', Rest)
  .name;
