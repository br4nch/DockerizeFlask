// Preloader
$(window).on("load", function() {
  preloaderFadeOutTime = 200;
  function hidePreloader() {
    var preloader = $(".spinner-wrapper");

    preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
});

$(window)
  .scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom <= windowBottom) {
        //object comes into view (scrolling down)
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(500, 1);
        }
      } else {
        //object goes out of view (scrolling up)
        if ($(this).css("opacity") == 1) {
          $(this).fadeTo(500, 0);
        }
      }
    });
  })
  .scroll();

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
  $("#overlay").fadeIn("fast");
  if ($(window).width() < 480) {
    $(".bottom-fix-bar").css("transform", "translateY(100%)");
  }
}

function off() {
  $("#overlay").fadeOut("fast");
  if ($(window).width() < 480) {
    $(".bottom-fix-bar").css("transform", "translateY(0%)");
  }
}

function closeproduct() {
  $("#product-detail-overlay").fadeOut("fast");
  // document.getElementById("product-detail-overlay").style.display = "none";
  if ($(window).width() < 480) {
    $(".bottom-fix-bar").css("transform", "translateY(0%)");
  }
}

function closeproject() {
  console.log("close project");
  $("#project-detail-overlay").fadeOut("fast");
  // document.getElementById("product-detail-overlay").style.display = "none";
  if ($(window).width() < 480) {
    $(".bottom-fix-bar").css("transform", "translateY(0%)");
  }
}

$(".clickable-product").click(function() {
  $("#product-detail-overlay").fadeIn("fast");

  // $("#product-detail-overlay").css("display", "block");

  if ($(window).width() < 480) {
    $(".bottom-fix-bar").css("transform", "translateY(100%)");
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

  console.log($(this).attr("data"));

  carousel.trigger("to.owl.carousel", parseInt($(this).attr("data")));
});

$(".clickable-project").click(function() {
  $("#project-detail-overlay").fadeIn("fast");

  // $("#product-detail-overlay").css("display", "block");

  if ($(window).width() < 480) {
    $(".bottom-fix-bar").css("transform", "translateY(100%)");
  }
  var carousel = $(".master-project-conatiner");
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

  console.log($(this).attr("data"));

  carousel.trigger("to.owl.carousel", parseInt($(this).attr("data")));
});

/////////Function to add data to backend////////

$("#cpa-form").submit(function(e) {
  return false;
});
function fillForm(event) {
  $.ajax({
    url: "/api/add-lead/",
    method: "POST",
    data: JSON.stringify({
      name: $("#name-input").val(),
      email: $("#email").val(),
      phone_no: $("#tel-number").val(),

      product: $("#form-product option:selected").text(),
      area: $("#area").val(),
      location: $("#city option:selected").text()
    }),
    contentType: "application/json",
    success: function(data) {
      console.log(data);
      $("#form-response").html(
        "<p>Thank you for choosing our services. We will shortyly get in touch with you.</p>"
      );
    },
    error: function(data) {
      console.log(data);
    }
  });
}
