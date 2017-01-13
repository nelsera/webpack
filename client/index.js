import './index.less';

import ang from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './index.config';
import ngResource from 'angular-resource';

import {Topbar} from './components/topbar';
import {Navbar} from './components/navbar';

import firmSignup from './features/firm-signup';
import rest from './rest';
import mask from 'angular-input-masks';

const modules = [
  uiRouter,
  ngResource,
  rest,
  firmSignup,
  mask
];

export default ang
  .module('client', modules)
  .config(routing)
  .component('topbarComponent', Topbar)
  .component('navbarComponent', Navbar);
