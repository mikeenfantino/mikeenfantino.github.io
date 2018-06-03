$(document).ready(function() {

  // Magnific Popup
  $('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	// MatchHeight
	$('.js-matchheight-box').matchHeight();
	$('.js-matchheight-box-header').matchHeight();

  // Back to Top
  $(".js-back-to-top").on("click", function() {
    $("html, body").animate({
        scrollTop: 0
    }, 800);
  });

}); // End of doc ready
