import ang from 'angular';

class Rest {
  /** @ngInject */
  constructor($resource) {
    return {
      getMenu: $resource('./components/navbar/navbar.mock.json', {}, {
        query: {method: 'GET', isArray: true}
      }),
      getStates: $resource('./resources/states.mock.json', {}, {
        query: {method: 'GET', isArray: true}
      })
    };
  }

}

export default ang.module('client.$rest', [])
  .service('$rest', Rest)
  .name;
