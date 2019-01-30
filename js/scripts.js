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

  // Header Profile
  var aboutMeLink = $('<p><a id="js-about-me" href="##">About me</a></p>');
  var headerProfileTitles = $(".header-profile-titles");
  var headerProfileMore = $(".header-profile-more");

  headerProfileTitles.append(aboutMeLink);

  headerProfileMore.hide();

  headerProfileTitles.on("click", "#js-about-me", function(e) {
    e.preventDefault();

    // About me pic
    $(".header-profile-pic").toggleClass("rotate");

    // About me content
    headerProfileMore.slideToggle(400, function() {
      if ($(this).is(":visible")) {
        $("#js-about-me").hide().fadeIn().text("Close");
      } else {
        $("#js-about-me").hide().fadeIn().text("About me");
      }
    });
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