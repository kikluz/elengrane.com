$(document).ready(function() {

// ------------------------------------------------------------
// slide show
// ------------------------------------------------------------

 // show first image no matter what
$('#hero-overflow :last-child').show();

setInterval(function() {

  // take bottom image
  var imgElement = $('#hero-overflow :first-child');

  // hide it & append to top of the stack
  imgElement.hide().appendTo('#hero-overflow');

  // slowly fade in (2 seconds)
  imgElement.fadeIn(2000);

}, 4000);


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





