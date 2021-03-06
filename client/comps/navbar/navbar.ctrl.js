import $ from 'jquery';
import menu from './navbar.mock';

export default class Navbar {
  /** @ngInject */
  constructor($location, $timeout) {
    this.ui = '#leftPanel';
    this.level0 = '.nav>ul>li';
    this.level1 = '.nav>ul>li>ul>li';

    this.items = menu;

    $('body')
      .on('click', `${this.ui} .nav>ul>li>a`, e => this.openMenu(this, e))
      .on('click', `${this.ui} .nav>ul>li>ul>li>a`, e => this.openSubmenu(this, e))
      .on('click', `${this.ui} .nav>ul>li>ul>li>ul>li>a`, this.setMenu);

    $timeout(() => this.activeMenu($location.path()));
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

    return $e.siblings('ul').is(':hidden') ?
      $e.parent('li').addClass('active').end()
      .siblings('ul').slideDown('fast') : null;
  }

  setMenu(e) {
    $('.nav>ul>li>ul>li>ul>li>a').removeClass('active');
    $(e.currentTarget).addClass('active');
  }

  openSubmenu(t, e) {
    const $e = $(e.currentTarget);

    t.resetSubmenu(t.level1);

    return $e.siblings('ul').is(':hidden') ?
      $e.find('i').removeClass('hide').end()
      .find('i.icon-plus').addClass('hide').end()
      .siblings('ul').slideDown('fast').end()
      .parent().addClass('active') : null;
  }
}
