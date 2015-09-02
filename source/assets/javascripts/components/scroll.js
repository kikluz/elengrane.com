// http://codepen.io/xmark/pen/Iryoj
(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.jump'
      };
      if (typeof options == 'string') defaults.selector = options;
      var options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed;
        if(jumpobj.attr('data-speed')){
          thespeed = Number(jumpobj.attr('data-speed'));
        } else {
          thespeed = 750;
        }
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'linear')
        e.preventDefault();
      })
    }
  }
})(jQuery);


jQuery(function(){	
  jQuery.mark.jump();
});


$(document).ready(function() {
  var firstLoad = true;
  show();
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
    firstLoad = false;
    show();
  });
  
  function show () {
    /* Check the location of each desired element */
    $('.toShow').each( function(i){
            
      var bottom_of_object = $(this).position().top + $(this).outerHeight() - ($(this).outerHeight() / 2);
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){

        $(this).removeClass('toShow');
        if (firstLoad == false) {
          $(this).addClass('animated bounceInUp');
        }
      }  

    });
  }
    
});
