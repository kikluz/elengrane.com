// ------------------------------------------------------------
// slide show
// ------------------------------------------------------------


$(function() {
 $('.fadein :first-child').appendTo('.fadein').show();
 setInterval(function() {
  $('.fadein :first-child').hide().appendTo('.fadein').fadeIn(2000);
 }, 4000);
});