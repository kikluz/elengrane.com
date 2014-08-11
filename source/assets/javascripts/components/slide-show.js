$(document).ready(function() {

// ------------------------------------------------------------
// slide show
// ------------------------------------------------------------
 if ($(document).width() >= 640 )
 {
   $('.fadein :first-child').appendTo('.fadein').show();
   setInterval(function() {
    $('.fadein :first-child').hide().appendTo('.fadein').fadeIn(2000);
   }, 4000);
 }else{
   $('.fadein :first-child').appendTo('.fadein').show();
 }

// ------------------------------------------------------------
// style switcher jquery
// ------------------------------------------------------------
  $('#switcher h3').click(function() {
    $('#switcher button').toggleClass('hidden');
  });

// ------------------------------------------------------------
// style switcher jquery: hover
// ------------------------------------------------------------

  $('#switcher h3').hover(function(){
    $(this).addClass('hover');}, function(){
      $(this).removeClass('hover');
  });

  $('#switcher-default').addClass('selected');
 
  $('#switcher button').click(function() {
    var bodyClass = this.id.split('-')[1];
 
    $('body').removeClass().addClass(bodyClass);
 
    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });


});





