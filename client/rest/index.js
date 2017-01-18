import ang from 'angular';

import menu from './menu.mock';
import states from './states.mock';
import {ADM_API, AUTH_API} from '../$$init/init.const';

class Rest {
  /** @ngInject */
  constructor($http) {
    this.xhr = $http;
  }

  getToken(data) {
    return this.xhr.post(`${AUTH_API}core/connect/token`, data, {
      headers: {'content-type': 'application/x-www-form-urlencoded'}
    });
  }

  getAdress(zipcode) {
    return this.xhr.get(`${ADM_API}address?zipcode=${zipcode}`).then(res => res.data);
  }

  getMenu() {
    return menu;
  }

  getStates() {
    return states;
  }

  getCompanyGlobal() {
    return this.xhr.get(`${ADM_API}company/metadata`, {
      headers: {language: 'pt-BR'}
    }).then(res => res.data);
  }

  signupCompany(data) {
    return this.xhr.post(`${ADM_API}Company`, data).then(res => res.data);
  }
}

export default ang.module('client.$rest', [])
  .service('$rest', Rest)
  .name;
