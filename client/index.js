import ang from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './index.config';
import container from './container';
import header from './components/header';
import menu from './components/menu';
import ngResource from 'angular-resource';
import rest from './resources/rest';

const modules = [
  uiRouter,
  ngResource,
  rest
];

export default ang
  .module('client', modules)
  .config(routing)
  .component('app', container)
  .component('headerComponent', header)
  .component('menuComponent', menu);
