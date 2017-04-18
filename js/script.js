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

function slider () {
	$('.filter--item').click( function () {
		$('.output--item').fadeTo('400', 0.2, function(){
			$(this).fadeTo('400', 1);
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