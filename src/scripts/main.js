// Vendors
import "./vendor/jquery";
import "./vendor/bootstrap";
//import "slick-carousel";

import "./vendor/slick-animation.min.js";
import "./vendor/slick.min.js";
import { WOW } from "wowjs";

(function ($) {
  "use strict";
  var sliderInit = $(".slick-slider-init");

  sliderInit.slick({
    autoplay: true,
    autoplaySpeed: 9000,
  });
  new WOW().init();
  sliderInit.slickAnimation();

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
      '<button class="slide-arrow custom-prev"><i class="fal text-white fa-chevron-left d-none d-md-block"></i></button>',
    nextArrow:
      '<button class="slide-arrow custom-next"><i class="fal text-white fa-chevron-right d-none d-md-block"></i></i></i></button>',
  });
  $("#main-slider").slickAnimation();

  // Toggle drawer
  $("#drawer-toggler").on("click", () => {
    $(".drawer").addClass("open");
    $(".body-overlay").fadeIn();
  });
  $(".body-overlay").on("click", () => {
    $(".drawer").removeClass("open");
    $(".body-overlay").fadeOut();
  });
})(jQuery);
