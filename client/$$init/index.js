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
import rest from '../rest';
import flash from '../comps/flash';

import company from '../feats/company';
import establishment from '../feats/establishment';

const m = [
  uir,
  rest,
  mask,
  auth,
  panel,
  flash,
  company,
  establishment
];

export default ang
  .module('client', m)
  .config(config)
  .run(run)
  .component('topbar', topbar)
  .component('navbar', navbar);
