"use strict";

// Preloader
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
});


$(document).ready(function() {
	
// Header
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $("#header").addClass("scrolled");
    } else {
      $("#header").removeClass("scrolled");
    }
  });
	// slide Block: contact us
	function slideblock () {
		var offset = $('#contactUs').offset();
		var initialPos = $('.masthead').offset();
   	var topPadding = 700;
    	$(window).scroll(function() {
        if ($(window).scrollTop() > initialPos.top) {
            $('#contactUs').stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
        }
        else {
            $('#contactUs').stop().animate({marginTop: initialPos});
        }
    });
	};
	slideblock();
	
// to Top arrow
	function scrollToTop () {
		var height = $('.masthead').height();
		var scroll = $('.scrollToTop');
		$(window).scroll(function(){
			if ($(this).scrollTop() > height) {
				scroll.fadeIn();
			} else {
				scroll.fadeOut();
			}
		});
	
		scroll.click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
	};
	scrollToTop();
	
// Slider
function slider () {
	var outputItems = $('.output--items');
	var outputItem = $('.output--item');
	var filterOutput = $('#filter-output');
	var filterItem = $('.filter--item');
	
	var itemHeight = outputItems.height();
	
	filterOutput.css('height', itemHeight);
	
	filterItem.click( function () {
		outputItem.fadeTo('100', 0.2, function(){
			$(this).fadeTo('500', 1);
		});
		filterItem.removeClass('filter--item__active');
		$(this).toggleClass('filter--item__active');
		outputItems.removeClass('output--items__active');
	});
	
	
	$('#dev').click( function () {
		outputItems.css({'transform' : 'translateY('+0+')'});
	});
	$('#design').click( function () {
		outputItems.css({'transform' : 'translateY(' + -itemHeight + 'px' + ')'});
	});
	$('#business').click( function () {
		outputItems.css({'transform' : 'translateY(' + -itemHeight*2 + 'px' + ')'});
	});
	$('#arts').click( function () {
		outputItems.css({'transform' : 'translateY(' + -itemHeight*3 + 'px' + ')'});
	});
}	



slider();


});


