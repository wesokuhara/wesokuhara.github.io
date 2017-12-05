'use strict';

function scrollTo(target) {
  $('html, body').animate(
    {
      scrollTop: $(target).offset().top
    },
    500
  );
}

$('.sidebar__navItem').click(function() {
  console.log('hello');

  var target = $(this).attr('data-target');
  scrollTo(target);
});

$(document).ready(function() {});
