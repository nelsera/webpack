import $ from 'jquery';
global.$ = $;

module.exports = navbar;

function navbar($rest, $location, $log) {
  let $scope = this;

  $rest.getMenu.query(function (res) {
    $scope.items = res;
  });

  $scope.menu = function ($event) {
    const $el = $($event.currentTarget);

    resetSubmenu();
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

  $scope.activeMenu = function ($event) {
    $('#leftPanel .nav>ul>li>ul>li>ul>li>a').removeClass('active');
    $($event.currentTarget).addClass('active');
  };

  function setMenu() {
    var $itemMenu = $('[href="' + $location.path() + '"]', 'body');
    $log.debug($itemMenu);

    // if(!$itemMenu.length) {
    //   this.pageName = ($.trim($config.pageName
    //     .replace(/([A-Z])/g, ' $1')
    //     .replace(/^./, function(str){ return str.toUpperCase(); })))
    //     .split(' ');
    //   this.pageName = this.pageName[0] + (this.pageName[1] || '') + (this.pageName[2] || '');
    //   $itemMenu = $('[href^="'+this.pageName+'"]', this.ui.leftPanel );
    // }

    if ($itemMenu.data('level')) {
      $itemMenu
        .addClass('active')
        .closest('ul').parent()
        .closest('ul').siblings('a').trigger('click');

      $itemMenu.closest('ul').siblings('a').trigger('click');
    } else {
      $itemMenu.parent().addClass('active');
    }
  }

  setMenu();
}
