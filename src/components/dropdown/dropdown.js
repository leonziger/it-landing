import $ from 'jquery';

const menuAuth = $('.main-header__dropdown');

if (menuAuth.length > 0) {
  menuAuth.click(function() {
    const burgerRight = menuAuth.children('.menu-toggle');
    burgerRight.toggleClass('menu-toggle_active');
    $('.main-auth').toggleClass('open');
    $('body').toggleClass('auth-open');
  });
}
