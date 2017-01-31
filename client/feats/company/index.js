import './@.less';

import ang from 'angular';
import uir from 'angular-ui-router';
import route from './company.routes';
import cpn from './company.ctrl';
import ls from './company.ctrl.ls';

export default ang.module('client.Company', [uir])
  .config(route)
  .controller('Company', cpn)
  .controller('CompanyLs', ls)
  .name;
