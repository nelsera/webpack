import ang from 'angular';
import uir from 'angular-ui-router';
import route from './panel.routes';
import ctrl from './panel.ctrl';

export default ang.module('client.Panel', [uir])
  .config(route)
  .controller('Panel', ctrl)
  .name;
