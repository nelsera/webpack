import ang from 'angular';

export default ang.module('client.Flash', [])
  .factory('flash', flash)
  .name;

/** @ngInject */
function flash($rootScope, $timeout) {
  $rootScope.flash = {};

  const asf = data => {
    $rootScope.flash = data;
    $timeout(() => $rootScope.flash = {}, 5000);
  };

  return {
    success: i => {
      asf({
        message: i,
        type: 'success',
        info: 'Sucesso'
      });
    },
    danger: i => {
      asf({
        message: i,
        type: 'danger',
        info: 'Atenção'
      });
    }
  };
}

