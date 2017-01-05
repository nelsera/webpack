import angular from 'angular';
import App from './app/containers/AppController';
import Header from './app/components/header/HeaderController';
import Menu from './app/components/menu/MenuController';
import routesConfig from './routes';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';

const app = 'app';
const modules = [
  uiRouter,
  ngResource
];

angular
  .module(app, modules)
  .config(routesConfig)
  .component('app', App)
  .component('headerComponent', Header)
  .component('menuComponent', Menu)
  .factory('MenuResources', Menu.factory);

module.exports = app;
