$(function () {
    $(document).scroll(function () {
      var $nav = $("nav");
      $nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
    });
});

$(function() {
    $('.nav-menu').click(function() {
      $('.nav-drop').css('display', 'flex');
      $(".nav-drop").animate({"right": '0%'});
      $("nav").addClass('scroll');
    });
    $(document).click(function(e) {
      var target = e.target;
      if (!$(target).is('.nav-drop') && !$(target).parents().is('.nav-menu')) {
        $(".nav-drop").animate({"right": '-90%'});
      }
    });
});
