import ang from 'angular';
import {ADM_API, AUTH_API} from '../../$$init/const';

class Rest {
  /** @ngInject */
  constructor($http) {
    this.xhr = $http;
  }

  getToken(req) {
    return this.xhr.post(`${AUTH_API}core/connect/token`, req, {
      headers: {'content-type': 'application/x-www-form-urlencoded'}
    });
  }

  getAddress(zc) {
    return this.xhr.get(`${ADM_API}address?zipcode=${zc}`)
    .then(res => res.data);
  }

  getStates() {
    return this.xhr.get(`${ADM_API}address/states`)
    .then(res => res.data);
  }

  getCompanyGlobal() {
    return this.xhr.get(`${ADM_API}company/metadata`, {
      headers: {language: 'pt-BR'}
    }).then(res => res.data);
  }

  company(req) {
    return this.xhr.post(`${ADM_API}Company`, req)
    .then(res => res.data);
  }
}

export default ang.module('client.$rest', [])
  .service('$rest', Rest)
  .name;