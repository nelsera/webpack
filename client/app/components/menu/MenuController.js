import './Menu.less';
import $ from 'jquery';
import MenuResources from './MenuResources';

module.exports = {
  template: require('./Menu.html'),
  controller: MenuController,
  bindings: {},
  factory: MenuResources
};

function MenuController(MenuResources, $log) {
  let $scope = this;

  MenuResources.angularIssues.query(function (res) {
    $scope.items = res;
    $log.debug(res);
  });

  $scope.menu = function ($event) {
    const $el = $($event.currentTarget);

    resetMenu();

    if ($el.siblings('ul').is(':hidden')) {
      $el
        .parent('li').addClass('active').end()
        .siblings('ul').slideDown('fast');
    }
  };

  $scope.subMenu = function ($event) {
    const $el = $($event.currentTarget);

    resetSubmenu();

    if ($el.siblings('ul').is(':hidden')) {
      $el
        .find('i').removeClass('hide').end()
        .find('i.icon-plus').addClass('hide').end()
        .siblings('ul').slideDown('fast').end()
        .parent().addClass('active');
    }
  };

  function resetMenu() {
    $('.nav>ul>li')
      .removeClass('active')
      .find('ul')
      .slideUp('fast');
  }

  function resetSubmenu() {
    $('.nav>ul>li>ul>li')
      .removeClass('active')
      .find('ul').slideUp('fast').end()
      .find('i').removeClass('hide').end()
      .find('i.icon-minus').addClass('hide');
  }
}

MenuController.prototype = {};
