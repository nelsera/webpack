import './@.less';

import ang from 'angular';
import uir from 'angular-ui-router';
import route from './company.routes';
import add from './company.ctrl.add';
import ls from './company.ctrl.ls';

export default ang.module('client.Company', [uir])
  .config(route)
  .controller('Company', add)
  .controller('CompanyLs', ls)
  .name;
