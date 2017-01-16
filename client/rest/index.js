import ang from 'angular';

import menu from './menu.mock';
import states from './states.mock';

class Rest {
  /** @ngInject */
  constructor($resource) {
    return {
      // getMenu: $resource('../components/navbar/navbar.mock.js', menu, {
      //   query: {method: 'GET', isArray: true}
      // }),
      getToken: $resource('https://dev-auth.wappa.com.br/api/core/connect/token', {}, {
        save: {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
      }),
      getMenu: {query: menu},
      getStates: {query: states}
    };
  }

}

export default ang.module('client.$rest', [])
  .service('$rest', Rest)
  .name;
