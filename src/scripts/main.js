// Vendors
import "./vendor/jquery";
import "./vendor/bootstrap";
import "slick-carousel";
import "../../bower_components/slick-animation/slick-animation";

import { WOW } from "wowjs";
var sliderInit = $(".slick-slider-init");

sliderInit.slick({
  autoplay: true,
  autoplaySpeed: 9000
});

sliderInit.slickAnimation();

$(document).ready(function() {
  // wowjs
  new WOW().init();

  //slick
  $("#main-slider").slick({
    arrows: true,
    prevArrow:
      '<button class="slide-arrow custom-prev"><i class="fad fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="slide-arrow custom-next"><i class="fad fa-chevron-right"></i></i></i></button>'
  });
  $("#main-slider").slickAnimation();

  $(function() {
    $("li.dropdown").hover(
      function() {
        $(this)
          .find(".dropdown-menu")
          .stop(true, true)
          .delay(200)
          .fadeIn(400);
      },
      function() {
        $(this)
          .find(".dropdown-menu")
          .stop(true, true)
          .fadeOut(400);
      }
    );
  });
});
