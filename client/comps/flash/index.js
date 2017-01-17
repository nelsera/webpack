import ang from 'angular';

export default ang.module('client.Flash', [])
  .factory('flash', flash)
  .name;

/** @ngInject */
function flash($rootScope, $timeout) {
  $rootScope.flash = {};

  function flash(data) {
    $rootScope.flash = data;
    $timeout(() => $rootScope.flash = {}, 5000);
  }

  return {
    success: i => {
      flash({
        message: i,
        type: 'success',
        info: 'Sucesso'
      });
    },
    danger: i => {
      flash({
        message: i,
        type: 'danger',
        info: 'Atenção'
      });
    }
  };
}

