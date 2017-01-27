import './@.less';

import ang from 'angular';
import uir from 'angular-ui-router';
import route from './establishment.routes';
import ctrl from './establishment.ctrl';

export default ang.module('client.Establishment', [uir])
  .config(route)
  .controller('Establishment', ctrl)
  .name;
