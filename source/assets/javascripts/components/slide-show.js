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
   $('#switcher').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});
 
$(document).ready(function() {
  $('#switcher').on('click.collapse', function(event) {
    if (!$(event.target).is('button')) {
      $('#switcher button').toggleClass('hidden');
    }
  });
 
  $('#switcher-narrow, #switcher-large').click(function() {
    $('#switcher').off('click.collapse');
  });
});
 
$(document).ready(function() {
  $('#switcher-default').addClass('selected');
 
  $('#switcher').click(function(event) {
    if ($(event.target).is('button')) {
      var bodyClass = event.target.id.split('-')[1];
 
      $('body').removeClass().addClass(bodyClass);
 
      $('#switcher button').removeClass('selected');
      $(event.target).addClass('selected');
    }
  });
});





