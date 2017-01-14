import './firm-signup.less';

import ang from 'angular';
import uir from 'angular-ui-router';
import route from './firm-signup.routes';
import ctrl from './firm-signup.ctrl';

export default ang.module('client.FirmSignup', [uir])
  .config(route)
  .controller('FirmSignup', ctrl)
  .name;
