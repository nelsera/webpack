import './index.less';

import ang from 'angular';
import uir from 'angular-ui-router';
import mask from 'angular-input-masks';

import run from './run';
import config from './config';
import topbar from '../comps/topbar';
import navbar from '../comps/navbar';
import auth from '../feats/auth';
import panel from '../feats/panel';
import firmSignup from '../feats/firm-signup';
import rest from '../rest';
import flash from '../comps/flash';

const m = [
  uir,
  rest,
  mask,
  auth,
  firmSignup,
  panel,
  flash
];

export default ang
  .module('client', m)
  .config(config)
  .run(run)
  .component('topbar', topbar)
  .component('navbar', navbar);
