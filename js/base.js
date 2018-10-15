$('#open').click(function() {
	$('.mobile-menu').fadeIn(400);
	$('#menu-items').slideToggle("slow");
});

$('#close').click(function() {
	$('#menu-items').slideToggle("slow");
	$('.mobile-menu').fadeOut(400);
});

