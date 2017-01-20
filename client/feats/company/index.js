import './company.less';

import ang from 'angular';
import uir from 'angular-ui-router';
import route from './company.routes';
import ctrl from './company.ctrl';

export default ang.module('client.Company', [uir])
  .config(route)
  .controller('Company', ctrl)
  .name;
