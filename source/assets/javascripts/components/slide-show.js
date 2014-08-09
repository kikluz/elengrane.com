// ------------------------------------------------------------
// slide show
// ------------------------------------------------------------


$(function() {
 $('.fadein :first-child').appendTo('.fadein').show();
 setInterval(function() {
  $('.fadein :first-child').hide().appendTo('.fadein').fadeIn(2000);
 }, 4000);
});

// ------------------------------------------------------------
// style switch jquery
// ------------------------------------------------------------
$(document).ready(function(){

  $('#switcher-large').on('click', function(){
    $('body').addClass('large')
  });
});

