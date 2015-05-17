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
