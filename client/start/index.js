import './index.less';

import ang from 'angular';
import uir from 'angular-ui-router';
import resource from 'angular-resource';
import mask from 'angular-input-masks';

import run from './index.run';
import config from './index.config';
import topbar from '../comps/topbar';
import navbar from '../comps/navbar';
import auth from '../feats/auth';
import panel from '../feats/panel';
import firmSignup from '../feats/firm-signup';
import rest from '../rest';

const m = [
  uir,
  resource,
  rest,
  mask,
  auth,
  firmSignup,
  panel
];

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

export default ang
  .module('client', m)
  .config(config)
  .run(run)
  .component('topbar', topbar)
  .component('navbar', navbar)
  .factory('flash', flash);
