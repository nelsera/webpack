import $ from 'jquery';

export default class NavbarCtrl {
  /** @ngInject */
  constructor($rest, $location, $timeout) {
    const level0 = '.nav>ul>li';
    const level1 = '.nav>ul>li>ul>li';
    const $scope = this;

    $rest.getMenu.query(res => {
      $scope.items = res;
    });

    $timeout(() => {
      const $item = $(`[href="${$location.path()}"]`, '#leftPanel');

      if ($item.data('level')) {
        $item
          .addClass('active')
          .closest('ul').parent()
          .closest('ul').siblings('a').trigger('click');

        $item
          .closest('ul')
          .siblings('a')
          .trigger('click');
      } else {
        $item
          .parent()
          .addClass('active');
      }
    }, 0);

    $('body')
      .on('click', '#leftPanel .nav>ul>li>a', e => {
        const $el = $(e.currentTarget);

        resetSubmenu(level1);
        resetMenu(level0);

        if ($el.siblings('ul').is(':hidden')) {
          $el
            .parent('li').addClass('active').end()
            .siblings('ul').slideDown('fast');
        }
      })
      .on('click', '#leftPanel .nav>ul>li>ul>li>a', e => {
        const $el = $(e.currentTarget);

        resetSubmenu(level1);

        if ($el.siblings('ul').is(':hidden')) {
          $el
            .find('i').removeClass('hide').end()
            .find('i.icon-plus').addClass('hide').end()
            .siblings('ul').slideDown('fast').end()
            .parent().addClass('active');
        }
      })
      .on('click', '#leftPanel .nav>ul>li>ul>li>ul>li>a', e => {
        $('#leftPanel .nav>ul>li>ul>li>ul>li>a').removeClass('active');
        $(e.currentTarget).addClass('active');
      });

    function resetMenu(el) {
      return $(el, '#leftPanel')
        .removeClass('active')
        .find('ul')
        .slideUp('fast');
    }

    function resetSubmenu(el) {
      return $(el)
        .removeClass('active')
        .find('ul').slideUp('fast').end()
        .find('i').removeClass('hide').end()
        .find('i.icon-minus').addClass('hide');
    }
  }
}
