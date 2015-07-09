//------------------------------------------------------------------------------
// Slide Toggle
//------------------------------------------------------------------------------
// need to add an optional container element that it needs to be activated.
(function($) {
	$('.js-slide-toggle--target').hide();
	$('.js-slide-toggle').off().on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.js-slide-toggle--target[data-target=' + $(this).attr('data-target') + ']').removeClass('active').slideUp(200);
		} else {
			$(this).addClass('active');
			$('.js-slide-toggle--target[data-target=' + $(this).attr('data-target') + ']').addClass('active').slideDown(200);
		}
		event.preventDefault();
	});
})(jQuery);