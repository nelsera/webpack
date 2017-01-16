import $ from 'jquery';

global.$ = $;

export default class Navbar {
  /** @ngInject */
  constructor($rest, $location, $timeout) {
    this.ui = '#leftPanel';
    this.level0 = '.nav>ul>li';
    this.level1 = '.nav>ul>li>ul>li';

    $rest.getMenu.query(res => this.items = res);

    $timeout(() => this.activeMenu($location.path()));

    $('body')
    .on('click', `${this.ui} .nav>ul>li>a`, e => this.openMenu(this, e))
    .on('click', `${this.ui} .nav>ul>li>ul>li>a`, e => this.openSubmenu(this, e))
    .on('click', `${this.ui} .nav>ul>li>ul>li>ul>li>a`, this.setMenu);
  }

  resetMenu(el) {
    return $(el)
    .removeClass('active')
    .find('ul')
    .slideUp('fast');
  }

  resetSubmenu(el) {
    return $(el)
    .removeClass('active')
    .find('ul').slideUp('fast').end()
    .find('i').removeClass('hide').end()
    .find('i.icon-minus').addClass('hide');
  }

  activeMenu(e) {
    const $item = $(`[href="${e}"]`);

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
  }

  openMenu(t, e) {
    const $e = $(e.currentTarget);

    t.resetSubmenu(t.level1);
    t.resetMenu(t.level0);

    if ($e.siblings('ul').is(':hidden')) {
      $e
      .parent('li').addClass('active').end()
      .siblings('ul').slideDown('fast');
    }
  }

  setMenu(e) {
    $('.nav>ul>li>ul>li>ul>li>a').removeClass('active');
    $(e.currentTarget).addClass('active');
  }

  openSubmenu(t, e) {
    const $e = $(e.currentTarget);

    t.resetSubmenu(t.level1);

    if ($e.siblings('ul').is(':hidden')) {
      $e
      .find('i').removeClass('hide').end()
      .find('i.icon-plus').addClass('hide').end()
      .siblings('ul').slideDown('fast').end()
      .parent().addClass('active');
    }
  }
}
