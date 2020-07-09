import $ from 'jquery';

const dropdownIcon = $('.dropdown__icon');

if (dropdownIcon.length > 0) {
  dropdownIcon.click(function() {
    $('.main-auth').toggleClass('open');
    $('body').toggleClass('auth-open');
  });
}
