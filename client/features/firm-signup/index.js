import './firm-signup.less';

import ang from 'angular';
import uirouter from 'angular-ui-router';

import routing from './firm-signup.routes';
import firmSignup from './firm-signup.controller';

export default ang.module('client.firmSignup', [uirouter])
  .config(routing)
  .controller('firmSignup', firmSignup)
  .name;
