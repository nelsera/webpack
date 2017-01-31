import './@.less';

import ang from 'angular';
import uir from 'angular-ui-router';
import mask from 'angular-input-masks';

import run from './run';
import config from './config';
import topbar from '../comps/topbar';
import navbar from '../comps/navbar';
import auth from '../feats/auth';
import panel from '../feats/panel';
import rest from '../comps/rest';
import flash from '../comps/flash';
import reg from '../comps/register';

import cpn from '../feats/company';
import etb from '../feats/establishment';

const m = [
  uir,
  rest,
  mask,
  auth,
  panel,
  flash,
  cpn,
  etb,
  reg
];

export default ang
  .module('client', m)
  .config(config)
  .run(run)
  .component('topbar', topbar)
  .component('navbar', navbar);
