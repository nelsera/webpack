import './topbar.less';

class TopbarController {
  constructor() {
    this.name = 'Topbar';
  }
}

export const Topbar = {
  template: require('./topbar.html'),
  controller: TopbarController
};
