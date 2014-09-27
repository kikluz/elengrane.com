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
});

// ------------------------------------------------------------
// Setting computed style  property values
// ------------------------------------------------------------
/*
$(document).ready(function() {
  var $speech = $('div.speech');
  var defaultSize = $speech.css('fontSize');
  $('#switcher button').click(function() {
    var num = parseFloat($speech.css('fontSize'));
    switch (this.id) {
      case 'switcher-large':
        num *= 1.4;
        break;
      case 'switcher-small':
        num /= 1.4;
        break;
      default:
        num = parseFloat(defaultSize);
    }
    $speech.animate({fontSize: num + 'px'}, 'slow');
  });
 
  var $firstPara = $('p').eq(1);
  $firstPara.hide();
  $('a.more').click(function(event) {
    event.preventDefault();
    $firstPara.animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 'slow');
    var $link = $(this);
    if ($link.text() == 'read more') {
      $link.text('read less');
    } else {
      $link.text('read more');
    }
  });
 
  $('div.label').click(function() {
    var paraWidth = $('div.speech p').outerWidth();
    var $switcher = $(this).parent();
    var switcherWidth = $switcher.outerWidth();
    $switcher
      .css({position: 'relative'})
      .fadeTo('fast', 0.5)
      .animate({
        left: paraWidth - switcherWidth
      }, {
        duration: 'slow',
        queue: false
      })
      .fadeTo('slow', 1.0)
      .slideUp('slow', function() {
        $switcher.css({backgroundColor: '#f00'});
      })
      .slideDown('slow');
  });
 
  $('p').eq(2)
    .css('border', '1px solid #333')
    .click(function() {
      var $clickedItem = $(this);
      $clickedItem.next().slideDown('slow', function() {
        $clickedItem.slideUp('slow');
      });
    });
  $('p').eq(3).css('backgroundColor', '#ccc').hide();
});

*/

// ------------------------------------------------------------
// a romence of many dimension jquery
// ------------------------------------------------------------
$(document).ready(function(){
  $('div.chapter a').attr({
    rel: 'external',
    title: 'Learn more at Wikipedia',
    id: function(index, oldValue) {
      return 'Wikilink-' + index;
    }
  });
});


// ------------------------------------------------------------
// accordion madness
// ------------------------------------------------------------

// hover effect
$(document).ready(function() {
  $('div.accordion-menu h3').add('div.accordion-menu h3').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});

// independently show and hide
$(document).ready(function() {
  $('div.accordion-menu:eq(0) > div').hide();  
  $('div.accordion-menu:eq(0) > h3').click(function() {
    $(this).next().slideToggle('fast');
  });
});

// one showing at a time

$(document).ready(function() {
  $('div.accordion-menu:eq(1) > div:gt(0)').hide();  
  $('div.accordion-menu:eq(1) > h3').click(function() {
    $(this).next('div:hidden').slideDown('fast')
    .siblings('div:visible').slideUp('fast');
  });
});


//simultaneous showing and hiding

$(document).ready(function() {
  $('div.accordion-menu2:eq(0) > div').hide();
  $('div.accordion-menu2:eq(0) > h3').click(function() {
    $(this).next('div').slideToggle('fast')
    .siblings('div:visible').slideUp('fast');
  });
});

//queued showing and hiding
$(document).ready(function() {
  $('div.accordion-menu2:eq(1) > div').hide();  
  $('div.accordion-menu2:eq(1) > h3').click(function() {
    var $nextDiv = $(this).next();
    var $visibleSiblings = $nextDiv.siblings('div:visible');

    if ($visibleSiblings.length ) {
      $visibleSiblings.slideUp('fast', function() {
        $nextDiv.slideToggle('fast');
      });
    } else {
       $nextDiv.slideToggle('fast');
    }
  });
});





