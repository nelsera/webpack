import './@.less';

import ang from 'angular';
import uir from 'angular-ui-router';
import route from './auth.routes';
import ctrl from './auth.ctrl';

export default ang.module('client.Auth', [uir])
  .config(route)
  .controller('Auth', ctrl)
  .name;
