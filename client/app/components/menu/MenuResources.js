function MenuResources($resource) {
  return {
    angularIssues: $resource('./app/components/menu/MenuMock.json', {}, {
      query: {method: 'GET', isArray: true}
    })
  };
}

module.exports = MenuResources;
