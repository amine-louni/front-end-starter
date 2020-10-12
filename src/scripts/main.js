// Vendors
import "jquery/dist/jquery.slim.js";
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
  $("#main-slider").on("afterChange init", function (event, slick) {
    // remove all prev/next
    console.log(slick.$slides);
    // find current slide
    for (var i = 0; i < slick.$slides.length; i++) {
      var $slide = $(slick.$slides[i]);
      if ($slide.hasClass("slick-current")) {
        // update DOM siblings
        $slide.find(".slide__bg-img").addClass("animateInOut");

        // $slide.prev().find(".slide__bg-img").removeClass("animateInOut");
        // $slide.next().find(".slide__bg-img").addClass("animateInOut");
      } else {
        $slide.find(".slide__bg-img").removeClass("animateInOut");
        console.log("not");
      }
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
  });

  $("#drawer-close").on("click", function () {
    $(".drawer").removeClass("open");
  });

  $(".custom-dropdown").on("click", function (e) {
    $(this).toggleClass("show");
    e.stopPropagation();
  });

  $("body").on("click", () => {
    $(".custom-dropdown").removeClass("show");
  });
})(jQuery);
