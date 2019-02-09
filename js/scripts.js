jQuery(function($) { // jQuery no conflict

  /* Magnific Popup
  -------------------------------------------------------------- */

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

  /* Header Profile
  -------------------------------------------------------------- */

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

  /* News Section
  -------------------------------------------------------------- */

  var newsLink = $('<hr /><p class="arrow"><a id="js-news" href="##">What am I up to?</a></p>');
  var sectionNews = $("section.news");
  var closeNews = $('<div id="js-close-news" class="section-close"><span class="section-close-icon"><i class="fas fa-times"></i></span></div>');

  headerProfileTitles.append(newsLink);
  sectionNews.hide().append(closeNews);

  headerProfileTitles.on("click", "#js-news", function(e) {
    e.preventDefault();
    // Rotate link arrow
    $(".header-profile-titles .arrow").toggleClass("arrow-rotate");
    // Open/close section
    sectionNews.slideToggle(400);
    // Animate close button
    $(".section-close-icon").toggleClass("on");
    // Scroll page
    if ($(".header-profile-titles .arrow").hasClass("arrow-rotate")) {
      // Scroll to link
      $("html, body").animate({
        scrollTop: $(this).offset().top
      }, 800);
    } else {
      // Scroll to top of page
      $("html, body").animate({
        scrollTop: 0
      }, 800);
    }
  });

  // News Close Button
  sectionNews.on("click", "#js-close-news", function(e) {
    e.preventDefault();
    // Animate close button
    $(".section-close-icon").removeClass("on");
    // Close section
    sectionNews.slideUp(400);
    // Rotate link arrow
    $(".header-profile-titles .arrow").removeClass("arrow-rotate");
    // Scroll to top of page
    $("html, body").animate({
      scrollTop: 0
    }, 800);
  });

  /* MatchHeight
  -------------------------------------------------------------- */

  // $('.js-matchheight-box').matchHeight();
  // $('.js-matchheight-box-header').matchHeight();

  // Fade in boxes
  // $(".js-box-fade").each(function(i) {
  //   $(this).delay(700 * i).fadeTo(700, 1);
  // });

  /* Back to Top
  -------------------------------------------------------------- */

  $(".js-back-to-top").on("click", function() {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
  });

}); // End of doc ready