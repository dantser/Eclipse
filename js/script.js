// Preloader
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
});

// Header
$(document).ready(function() {
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $("#header").addClass("scrolled");
    } else {
      $("#header").removeClass("scrolled");
    }
  });
});

// Slider
function slider () {
	$('.filter--item').click( function () {
		$('.output--item').fadeTo('700', 0.7, function(){
			$(this).fadeTo('700', 1);
		});
		$('.filter--item').removeClass('filter--item__active');
		$(this).toggleClass('filter--item__active');
		$('.output--items').removeClass('output--items__active');
	});
	
	$('#dev').click( function () {
		$('#dev__items').toggleClass('output--items__active');
	});
	$('#design').click( function () {
		$('#design__items').toggleClass('output--items__active');
	});
	$('#business').click( function () {
		$('#business__items').toggleClass('output--items__active');
	});
	$('#arts').click( function () {
		$('#design__items').toggleClass('output--items__active');
	});
}
slider();