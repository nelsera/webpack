import './index.less';

import ang from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './index.config';
import ngResource from 'angular-resource';

import topbar from './components/topbar';
import navbar from './components/navbar';
import rest from './resources/rest';
import firmSignup from './features/firm-signup';

const modules = [
  uiRouter,
  ngResource,
  rest,
  firmSignup
];

export default ang
  .module('client', modules)
  .config(routing)
  .component('topbarComponent', topbar)
  .component('navbarComponent', navbar);
