import $ from 'jquery';

const vantages = $('.faq__vantages');

vantages.click(function(e){
  const target = $(e.target);
  const container = $(e.target).siblings('.faq__vantage-answer');

  if ( target.hasClass('opened') ) {
    target.removeClass('opened');
    container.slideUp();
  } else {
    target.addClass('opened');
    container.slideDown();
  }
});