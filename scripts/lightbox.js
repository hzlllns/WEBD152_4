$.fn.lightbox = function() {

	$(this).click(function(e) {
		e.preventDefault(); // stop default action
		var image_href = $(this).attr('href'); // finds href tag and stores variable
		var text = $(this).attr('data-title');

		var lightbox =
			'<div id="lightbox">' +
				'<div id="content">' +
					'<img src="' + image_href + '" class="active">' +
					'<p id="title">' + text + '</p>' +
				'</div>' +
			'</div>';

		$(lightbox).hide().appendTo('body').fadeIn(200);

		var lightbg = $('#lightbox');

		lightbg.click(function (){
			$(this).fadeOut(300, function() {
				$(this).remove();
			});
		});

		// Keyboard controls
		$(document).keyup(function (e){
			// every key on the keyboard has a number associated with it. 27 is ESC key.
			if (e.keyCode == 27){
				lightbg.fadeOut(300, function() {
					$(this).remove();
				});				
			}
		});	

	});

}

