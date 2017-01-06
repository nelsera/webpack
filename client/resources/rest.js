import ang from 'angular';

export default ang.module('client.$rest', [])
  .service('$rest', $rest)
  .name;

function $rest($resource) {
  return {
    getMenu: $resource('./components/navbar/navbar.mock.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  };
}
