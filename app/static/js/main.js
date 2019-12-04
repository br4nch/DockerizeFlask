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
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
function closeproduct() {
  document.getElementById("product-detail-overlay").style.display = "none";
}
$(".clickable-product").click(function() {
  $("#product-detail-overlay").css("display", "block");

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
