module.exports = menuResources;

function menuResources($resource) {
  return {
    getMenu: $resource('./components/menu/menu.mock.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  };
}
