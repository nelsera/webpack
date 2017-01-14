import ang from 'angular';

import menu from './menu.mock';
import states from './states.mock';

class Rest {
  constructor() {
    return {
      // getMenu: $resource('../components/navbar/navbar.mock.js', menu, {
      //   query: {method: 'GET', isArray: true}
      // }),
      getMenu: {query: menu},
      getStates: {query: states}
    };
  }

}

export default ang.module('client.$rest', [])
  .service('$rest', Rest)
  .name;
