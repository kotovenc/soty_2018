$('#open').click(function() {
	$('.mobile-menu').fadeIn(400);
	$('#menu-items').slideToggle("slow");
	('footer').css({display: none;})
});

$('#close').click(function() {
	$('#menu-items').slideToggle("slow");
	$('.mobile-menu').fadeOut(400);
});

