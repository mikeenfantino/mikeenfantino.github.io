jQuery(function($) { // jQuery no conflict

  /* Header Profile
  -------------------------------------------------------------- */

  const aboutMeLink = $('<p><a id="js-about-me" href="##">About me</a></p>');
  const headerProfileTitles = $(".header-profile-titles");
  const headerProfileMore = $(".header-profile-more");

  headerProfileTitles.append(aboutMeLink);

  // Function aboutMe
  function aboutMe(e) {
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

  }

  // Call aboutMe
  headerProfileTitles.on("click", "#js-about-me", aboutMe);

  /* News Section
  -------------------------------------------------------------- */

  const newsLink = $('<hr /><p class="arrow"><a id="js-news" href="##">What am I up to?</a></p>');
  const sectionNews = $("section.news");
  const closeNews = $('<div id="js-close-news" class="section-close"><span class="section-close-icon"><i class="fas fa-times"></i></span></div>');

  headerProfileTitles.append(newsLink);
  sectionNews.append(closeNews);

  // Function news
  function news(e) {
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

  }

  // Call news
  headerProfileTitles.on("click", "#js-news", news);

  /* News Close Button
  -------------------------------------------------------------- */

  // Function newsCloseButton
  function newsCloseButton(e) {
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

  }

  // Call newsCloseButton
  sectionNews.on("click", "#js-close-news", newsCloseButton);

  /* Back to Top
  -------------------------------------------------------------- */

  $(".js-back-to-top").on("click", function() {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
  });

  /* Magnific Popup
  -------------------------------------------------------------- */

  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: false,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  /* MatchHeight
  -------------------------------------------------------------- */

  // $('.js-matchheight-box').matchHeight();
  // $('.js-matchheight-box-header').matchHeight();

  // Fade in boxes
  // $(".js-box-fade").each(function(i) {
  //   $(this).delay(700 * i).fadeTo(700, 1);
  // });

}); // End of doc ready
