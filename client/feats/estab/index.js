import './@.less';

import ang from 'angular';
import uir from 'angular-ui-router';
import route from './estab.routes';
import ctrl from './estab.ctrl';
import ls from './estab.ctrl.ls';

export default ang.module('client.Establishment', [uir])
  .config(route)
  .controller('Establishment', ctrl)
  .controller('EstablishmentLs', ls)
  .name;
