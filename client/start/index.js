import './index.less';

import ang from 'angular';
import uir from 'angular-ui-router';
import run from './index.run';
import config from './index.config';
import resource from 'angular-resource';
import mask from 'angular-input-masks';

import {Topbar} from '../comps/topbar';
import {Navbar} from '../comps/navbar';

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

export default ang
  .module('client', m)
  .config(config)
  .run(run)
  .component('topbar', Topbar)
  .component('navbar', Navbar);
