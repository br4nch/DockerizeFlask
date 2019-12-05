$(".testimonial-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,

  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
});

function displayPopUpForm() {
  $('#overlay').fadeIn('fast')
  if ($(window).width() < 480) {
    $('.bottom-fix-bar').css('transform','translateY(100%)')
  }
}

function off() {
  $('#overlay').fadeOut('fast')
  if ($(window).width() < 480) {
    $('.bottom-fix-bar').css('transform','translateY(0%)')
  }
}

function closeproduct() {
  $('#product-detail-overlay').fadeOut('fast')
  // document.getElementById("product-detail-overlay").style.display = "none";
  if ($(window).width() < 480) {
    $('.bottom-fix-bar').css('transform','translateY(0%)')
  }
}

$(".clickable-product").click(function() {
  $('#product-detail-overlay').fadeIn('fast')

  // $("#product-detail-overlay").css("display", "block");

  if ($(window).width() < 480) {
    $('.bottom-fix-bar').css('transform','translateY(100%)')
  }

  var carousel = $(".master-product-conatiner");
  carousel.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,

    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  carousel.trigger("to.owl.carousel", 2);
});
