import $ from 'jquery';
import ang from 'angular';

global.$ = $;

var navbar = ($rest, $location, $log, $timeout) => {
  var $scope = this;

  $rest.getMenu.query(res => {
    $scope.items = res;
  });

  $scope.menu = $event => {
    const $el = $($event.currentTarget);

    resetSubmenu();
    resetMenu();

    if ($el.siblings('ul').is(':hidden')) {
      $el
        .parent('li').addClass('active').end()
        .siblings('ul').slideDown('fast');
    }
  };

  $scope.subMenu = $event => {
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

  $scope.activeMenu = function ($event) {
    $('#leftPanel .nav>ul>li>ul>li>ul>li>a').removeClass('active');
    $($event.currentTarget).addClass('active');
  };

  function setMenu() {
    $timeout(function () {
      var $itemMenu = $('[href="/empresa/nova"]', 'body');

      if ($itemMenu.data('level')) {
        $log.debug('sfdfsdf');
        $itemMenu
          .addClass('active')
          .closest('ul').parent()
          .closest('ul').siblings('a').trigger('click');

        ang.element($('[href="/empresa/nova"]', 'body').addClass('active').closest('ul').parent().closest('ul').siblings('a')).triggerHandler('click');

        $itemMenu.closest('ul').siblings('a').trigger('click');
      } else {
        $itemMenu.parent().addClass('active');
      }
    }, 0);
  }

  setMenu();
};

module.exports = navbar;