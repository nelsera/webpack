import './index.less';

import ang from 'angular';
import uir from 'angular-ui-router';
import route from './index.config';
import resource from 'angular-resource';

import {Topbar} from './comps/topbar';
import {Navbar} from './comps/navbar';

import firmSignup from './feats/firm-signup';
import rest from './rest';
import mask from 'angular-input-masks';

const mods = [
  uir,
  resource,
  rest,
  firmSignup,
  mask
];

export default ang
  .module('client', mods)
  .config(route)
  .component('topbar', Topbar)
  .component('navbar', Navbar);
