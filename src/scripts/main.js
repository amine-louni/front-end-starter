// Vendors
import "./vendor/jquery";
import "./vendor/bootstrap";
import "slick-carousel";
import "./vendor/slick-animation.min.js";
import { WOW } from "wowjs";
var sliderInit = $(".slick-slider-init");

sliderInit.slick({
  autoplay: true,
  autoplaySpeed: 9000,
});

/* Please ❤ this if you like it! */

(function ($) {
  "use strict";
  new WOW().init();
  sliderInit.slickAnimation();

  $(function () {
    var header = $(".start-style");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass("start-style").addClass("scroll-on   ");
      } else {
        header.removeClass("scroll-on").addClass("start-style   ");
      }
    });
  });

  //Animation

  //Menu On Hover

  $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest(".nav-item");
      _d.addClass("show");
      setTimeout(function () {
        _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
      }, 1);
    }
  });

  //slick
  $("#main-slider").slick({
    arrows: true,
    prevArrow:
      '<button class="slide-arrow custom-prev"><i class="fal text-white fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="slide-arrow custom-next"><i class="fal text-white fa-chevron-right"></i></i></i></button>',
  });
  $("#main-slider").slickAnimation();
})(jQuery);
