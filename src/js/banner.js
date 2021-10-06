$(document).on('click', '.banner__link', function () {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top - 20;
	$('body,html').animate({scrollTop: top}, 1000);
});
