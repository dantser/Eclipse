function slider () {
	$('.filter--item').click( function () {
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