import $ from 'jquery';

const menuToggle = $('.main-header__menu-toggle');

if (menuToggle.length > 0) {
  menuToggle.click(function() {
    const burgerLeft = menuToggle.children('.menu-toggle');
    burgerLeft.toggleClass('menu-toggle_active');
    $('.main-menu').toggleClass('open');
    $('body').toggleClass('menu-open');
  });
}
