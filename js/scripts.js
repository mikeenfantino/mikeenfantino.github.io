jQuery(function($) { // jQuery no conflict

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
  // $('.js-matchheight-box').matchHeight();
  // $('.js-matchheight-box-header').matchHeight();

  // Fade in boxes
  // $(".js-box-fade").each(function(i) {
  //   $(this).delay(700 * i).fadeTo(700, 1);
  // });

  // Back to Top
  $(".js-back-to-top").on("click", function() {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
  });

}); // End of doc ready