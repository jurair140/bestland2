/* ============== 
 ================= JS DOCUMENTATION ==================

 * template name: Salonix
 * version: 1.0
 * description: Salonix - Hair, Spa, Nail, Beauty Salons and Cosmetics Multipurpose HTML Template
 * author: pixelaxis
 * author-url: https://themeforest.net/user/pixelaxis

    ==================================================

     01. Goto Top
     -------------------------------------------------
     02. Gallery
     -------------------------------------------------
     03. Show Navbar On Scroll
     -------------------------------------------------
     04. Search Popup Toggle
     -------------------------------------------------
     05. Mobile Menu
     -------------------------------------------------
     06. Custom Count
     -------------------------------------------------
     07. Swiper Sliders
     -------------------------------------------------
     08. Expert Card Social Hover
     -------------------------------------------------
     09. Show Hide Comment Input
     -------------------------------------------------
     10. Nice Select
     -------------------------------------------------
     11. Set Active Menu
     -------------------------------------------------
     12. Animated Circular Text
     -------------------------------------------------
     13. Range Slider Value
     -------------------------------------------------
     14. Show Hide Filter
     -------------------------------------------------
     15. Rating Progress
     -------------------------------------------------
     16. Show Comment Reply
     -------------------------------------------------
     17. Product Quantity Increase Decrease
     -------------------------------------------------
     18. Show Popup Video
     -------------------------------------------------
     19. Back To Top Button
     -------------------------------------------------
     20. Fade Up Animation With GSAP
     -------------------------------------------------
     21. Loader
     ------------------------------------------------- 
    ===================================================
*/

/* ========== GOTO TOP ========== */
let topBtn = document.querySelector(".goto-top");
if (topBtn) {
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ========== GALLERY  ========== */
const gallery = document.getElementById("gallery");
if (gallery) {
  GLightbox({
    touchNavigation: true,
    loop: true,
  });
}

/* ========== SHOW NAVBAR ON SCROLL ========== */
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 150) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
});

/* ========== SEARCH POPUP TOGGLE ========== */
$(".search-popup-btn").on("click", function () {
  $(".search-popup").toggleClass("show");
});
$(".search-popup-close").on("click", function () {
  $(".search-popup").removeClass("show");
});
$(document).on("keydown", function (e) {
  if (e.key === "Escape") {
    $(".search-popup").removeClass("show");
  }
});

/* ========== MOBILE MENU ========== */
$(document).ready(function () {
  // Append submenu buttons
  $("#navbar-menu ul .submenu > span").append('<i class="ph ph-caret-down"></i>');
  $("#navbar-menu-mobile ul .submenu > span").append('<i class="ph ph-caret-down"></i>');

  // toggle mobile menu
  $(".toggle-menu,.close-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu").toggleClass("open");
  });

  // left sidebar open
  $(".show-offcanvas,.left-sidebar-close,.left-sidebar-overlay").on("click", function () {
    $(".left-sidebar").toggleClass("open");
  });

  $(".submenu").on("click", function (e) {
    // On mobile, toggle submenu on click
    if (window.innerWidth <= 992) {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).find("ul").slideUp();
      } else {
        $("#navbar-menu-mobile ul li").removeClass("active");
        $("#navbar-menu-mobile ul li ul").slideUp();
        $(this).addClass("active");
        $(this).find("ul").stop().slideToggle();
        e.stopPropagation();
      }
    }
  });
});

/* ========== CUSTOM COUNT ========== */
function custom_count() {
  var flag = true;
  $(".counter-inner").each(function () {
    if ($(this).isInViewport()) {
      // Here we check perticular section is in the viewport or number-counter-section
      if (flag) {
        /* FOR number counter(odometer)  */
        var arr = [],
          i = 0;
        $(".odometer").each(function () {
          arr[i++] = $(this).attr("data-count");
          odometer1.innerText = arr[0]; //here odometer is *id* of first number
          odometer2.innerText = arr[1]; //here odometer1 is *id* of second number
          odometer3.innerText = arr[2]; //here odometer1 is *id* of second number
          odometer4.innerText = arr[3]; //here odometer1 is *id* of second number
        });
        flag = false;
      }
    } else {
    }
  });
}

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(document).ready(function () {
  custom_count();
  $(window).resize(function () {
    custom_count();
  });
  $(window).on("scroll", function () {
    custom_count();
  });
});

/* ========== SWIPER SLIDERS ========== */
if (document.querySelector(".swiper")) {
  let serviceSwiper = new Swiper(".ServiceSwiper", {
    navigation: {
      nextEl: ".service-next",
      prevEl: ".service-prev",
    },
    loop: true,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
  let expertSwiper = new Swiper(".expertSwiper", {
    navigation: {
      nextEl: ".expert-next",
      prevEl: ".expert-prev",
    },
    loop: true,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
  let trendingSwiper = new Swiper(".trendingSwiper", {
    navigation: {
      nextEl: ".trending-next",
      prevEl: ".trending-prev",
    },
    pagination: {
      el: ".trending-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
  let expertSwiper3 = new Swiper(".expertSwiper3", {
    navigation: {
      nextEl: ".expert-next",
      prevEl: ".expert-prev",
    },
    loop: true,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
  let clientSwiper = new Swiper(".clientSwiper", {
    navigation: {
      nextEl: ".client-next",
      prevEl: ".client-prev",
    },
    loop: true,
    autoplay: true,
  });
  let logoSwiper2 = new Swiper(".logo-slider-2", {
    autoplay: {
      delay: 1,
    },
    speed: 5000,
    loop: true,
    slidesPerView: "auto",
  });
  let banner3Swiper = new Swiper(".banner3Swiper", {
    pagination: {
      el: ".banner3-pagination",
      clickable: true,
    },
    loop: true,
    effect: "fade",
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
  });
  let banner6Swiper = new Swiper(".banner6Swiper", {
    pagination: {
      el: ".hero6-pagination",
      clickable: true,
    },
    loop: true,
    effect: "fade",
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
  });
  let serviceSlider = new Swiper(".serviceSlider", {
    pagination: {
      el: ".service-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return `<span class="${currentClass} h1 text-center d-block mt-3 pt-2 current-page"></span> <span class="d-block text-end pe-2 mt-3">/<span class="${totalClass}"> /</span></span> `;
      },
      formatFractionCurrent: function (number) {
        return number < 10 ? `0${number}` : number; // Adds leading zero
      },
      formatFractionTotal: function (number) {
        return number < 10 ? `0${number}` : number; // Adds leading zero
      },
    },
    loop: true,
    effect: "fade",
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
  });
  let banner2Swiper = new Swiper(".hero4-slider", {
    pagination: {
      el: ".hero4-pagination",
      clickable: true,
    },
    loop: true,
    effect: "fade",
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
  });
  let hero5Slider = new Swiper(".hero5-slider", {
    pagination: {
      el: ".hero5-pagination",
      clickable: true,
    },
    loop: true,
    effect: "fade",
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
  });
  let testi6Slider = new Swiper(".testimonialSlider6", {
    navigation: {
      prevEl: ".testi6-prev",
      nextEl: ".testi6-next",
    },
    loop: true,
    speed: 1200,
    autoplay: true,
  });
  let succesStorySwiper = new Swiper(".success-story-swiper", {
    navigation: {
      prevEl: ".success-story-prev",
      nextEl: ".success-story-next",
    },
    loop: true,
    speed: 1200,
    centeredSlides: true,
    autoplay: true,
    breakpoints: {
      768: {
        slidesPerView: 1.4,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 1.6,
        spaceBetween: 24,
      },
      1350: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1350: {
        slidesPerView: 2.2,
        spaceBetween: 24,
      },
    },
  });
  let solutionSwiper = new Swiper(".solution-swiper", {
    navigation: {
      prevEl: ".solution-prev",
      nextEl: ".solution-next",
    },
    loop: true,
    speed: 1200,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 1.4,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 1.4,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1600: {
        slidesPerView: 2.3,
        spaceBetween: 24,
      },
    },
  });
  let clientSwiper2 = new Swiper(".clientSwiper2", {
    navigation: {
      nextEl: ".client-next",
      prevEl: ".client-prev",
    },
    loop: true,
    autoplay: true,
    breakpoints: {
      580: {
        slidesPerView: 1.5,
        spaceBetween: 24,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 1.4,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 1.4,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 1.8,
        spaceBetween: 24,
      },
      1600: {
        slidesPerView: 2.2,
        spaceBetween: 24,
      },
    },
  });
  let clientSwiper3 = new Swiper(".clientSwiper3", {
    navigation: {
      nextEl: ".client-next",
      prevEl: ".client-prev",
    },
    loop: true,
    autoplay: true,
    breakpoints: {
      580: {
        slidesPerView: 1.3,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 1.4,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 1.5,
        spaceBetween: 24,
      },
    },
  });
  let brandSwiper = new Swiper(".brand-swiper", {
    loop: true,
    autoplay: true,
    spaceBetween: 16,
    slidesPerView: "auto",
  });
  let triumphSwiper = new Swiper(".empower-swiper", {
    navigation: {
      nextEl: ".service-next",
      prevEl: ".service-prev",
    },
    pagination: {
      el: ".empower-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: true,
    speed: 1000,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1.4,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 1.8,
        spaceBetween: 24,
      },
    },
  });
}

/* ========== EXPERT CARD SOCIAL HOVER ========== */
$(".expert-card").each(function () {
  const $card = $(this);
  const $socialBtn = $card.find(".social-btn");
  const $links = $card.find(".links");

  // Add mouseover event to "social-btn"
  $socialBtn.on("mouseover", function () {
    $links.addClass("active");
    $socialBtn.find("i").removeClass("ph-plus").addClass("ph-minus");
  });

  // Add mouseover event to "links"
  $links.on("mouseover", function () {
    $links.addClass("active");
    $socialBtn.find("i").removeClass("ph-plus").addClass("ph-minus");
  });

  // Add mouseout event to "links"
  $links.on("mouseout", function () {
    $links.removeClass("active");
    $socialBtn.find("i").addClass("ph-plus").removeClass("ph-minus");
  });

  // Add mouseout event to "social-btn"
  $socialBtn.on("mouseout", function () {
    $links.removeClass("active");
    $socialBtn.find("i").addClass("ph-plus").removeClass("ph-minus");
  });
});

// card two
$(".expert-card-2").each(function () {
  const $card = $(this);
  const $socialBtn = $card.find(".social-btn");
  const $links = $card.find(".links");

  // Add mouseover event to "social-btn"
  $socialBtn.on("mouseover", function () {
    $links.addClass("active");
    $socialBtn.find("i").removeClass("ph-plus").addClass("ph-minus");
  });

  // Add mouseover event to "links"
  $links.on("mouseover", function () {
    $socialBtn.find("i").removeClass("ph-plus").addClass("ph-minus");
    $links.addClass("active");
  });

  // Add mouseout event to "links"
  $links.on("mouseout", function () {
    $socialBtn.find("i").addClass("ph-plus").removeClass("ph-minus");
    $links.removeClass("active");
  });

  // Add mouseout event to "social-btn"
  $socialBtn.on("mouseout", function () {
    $links.removeClass("active");
    $socialBtn.find("i").addClass("ph-plus").removeClass("ph-minus");
  });
});

/* ========== SHOW HIDE COMMENT INPUT ========== */
const comments = document.querySelectorAll(".write-comment");
if (comments) {
  comments.forEach((comment) => {
    const replyBtn = comment.querySelector(".reply-btn");
    const commentInput = comment.querySelector(".comment-input");
    replyBtn.addEventListener("click", function () {
      commentInput.classList.toggle("active");
      replyBtn.classList.toggle("text-primary");
    });
  });
}

/* ========== NICE SELECT ========== */
let selects = document.querySelectorAll("select");
if (selects.length) {
  selects.forEach((s) => {
    NiceSelect.bind(s);
  });
}

/* ==========  11. SET ACTIVE MENU ========== */
function setActiveMenu() {
  // add active menu
  const submenuLinks = document.querySelectorAll(".menu li a");
  // Loop through each submenu link
  submenuLinks.forEach(function (link) {
    // Get the current URL
    const currentUrl = window.location.href;
    // Get the href attribute of the submenu link
    const href = link.getAttribute("href");
    // Check if the current URL matches the submenu link's href
    const filename = new URL(currentUrl).pathname.split("/").pop();
    const cleanName = filename.replace(".html", "");
    const cleanHref = href.replace(".html", "");
    if (cleanHref === cleanName || (cleanHref === "index" && filename == "")) {
      // Add the 'active' class to the parent menu-btn
      link.classList.add("active");
      const submenu = link.parentElement.parentElement;
      const menuBtn = submenu.previousElementSibling;
      menuBtn.classList.add("active");
    }
  });
}

setActiveMenu();

/* ========== ANIMATED CIRCULAR TEXT ========== */
const defaultText = "explore more . explore more . ";
document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".text");
  texts.forEach((text) => {
    const str = text.getAttribute("data-text") || defaultText;

    for (let i = 0; i < str.length; i++) {
      let span = document.createElement("span");
      span.innerHTML = str[i];
      text.appendChild(span);
      span.style.transform = `rotate(${12 * i}deg)`;
    }
  });
});

/* ========== RANGE SLIDER VALUE ========== */
$(".minprice").text("$" + $("#min").val());
$(".maxprice").text("$" + $("#max").val());

$("#min").on("input", function () {
  $(".minprice").text("$" + this.value);
});

$("#max").on("input", function () {
  $(".maxprice").text("$" + this.value);
});

/* ========== SHOW HIDE FILTER ========== */
$(".filter-btn").on("click", function () {
  $(".product-filter").toggleClass("active");
});

$(".filter-close").on("click", function () {
  $(".product-filter").removeClass("active");
});

/* ========== RATING PROGRESS ========== */
$(".rating-progress .inner").each(function () {
  var dataWidth = $(this).data("width");
  $(this).css("width", dataWidth);
});

/* ========== SHOW COMMENT REPLY ========== */
$(".reply-button").on("click", function () {
  console.log("clicked");
  $(this).closest(".buttons").next(".reply-container").slideToggle(300);
});

/* ========== PRODUCT QUANTITY INCREASE DECREASE ========== */
$(".quantity-plus").on("click", function () {
  var val = parseInt($(this).prev(".quantity-input").val(), 10);
  $(this).prev(".quantity-input").val(++val);
});

$(".quantity-minus").on("click", function () {
  var val = parseInt($(this).next(".quantity-input").val(), 10);
  if (val > 1) {
    $(this).next(".quantity-input").val(--val);
  }
});

/* ========== SHOW POPUP VIDEO ========== */
if (document.querySelector(".popup-youtube")) {
  $(".popup-youtube").magnificPopup({
    type: "iframe",
  });
}

/* ========== BACK TO TOP BUTTON ========== */
$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    $(".back-to-top").addClass("show");
  } else {
    $(".back-to-top").removeClass("show");
  }
  $(".back-to-top").on("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* ========== FADE UP ANIMATION WITH GSAP ========== */
if (document.querySelector(".fade_up_anim")) {
  let fadeArray_items = document.querySelectorAll(".fade_up_anim");
  if (fadeArray_items.length > 0) {
    const fadeArray = gsap.utils.toArray(".fade_up_anim");
    fadeArray.forEach((item, i) => {
      var fade_direction = "bottom";
      var onscroll_value = 1;
      var duration_value = 0.75;
      var fade_offset = 40;
      var delay_value = 0.15;
      var ease_value = "power2.out";

      if (item.getAttribute("data-duration")) {
        duration_value = item.getAttribute("data-duration");
      }
      if (item.getAttribute("data-fade-from")) {
        fade_direction = item.getAttribute("data-fade-from");
      }
      if (item.getAttribute("data-delay")) {
        delay_value = item.getAttribute("data-delay");
      }

      let animation_settings = {
        opacity: 0,
        ease: ease_value,
        duration: duration_value,
        delay: delay_value,
      };

      if (fade_direction == "top") {
        animation_settings["y"] = -fade_offset;
      }
      if (fade_direction == "left") {
        animation_settings["x"] = -fade_offset;
      }

      if (fade_direction == "bottom") {
        animation_settings["y"] = fade_offset;
      }

      if (fade_direction == "right") {
        animation_settings["x"] = fade_offset;
      }

      if (onscroll_value == 1) {
        animation_settings["scrollTrigger"] = {
          trigger: item,
          start: "top 90%",
        };
      }
      gsap.from(item, animation_settings);
    });
  }
}

/* ========== LOADER ========== */
$(document).ready(function () {
  setTimeout(() => {
    $(".loader-container").fadeOut("slow");
    document.documentElement.style.overflow = "auto";
  }, 400);
});

// rating
$(document).ready(function () {
  let currentRating = 0;

  // Highlight stars on hover
  $(".rating i").on("mouseenter", function () {
    const value = $(this).data("value");
    highlightStars(value);
  });

  // Reset stars when mouse leaves the component
  $(".rating i").on("mouseleave", function () {
    highlightStars(currentRating);
  });

  // Set rating on click
  $(".rating i").on("click", function () {
    currentRating = $(this).data("value");
    $("#rating-value").text(currentRating);
    highlightStars(currentRating);
  });

  // Function to highlight stars
  function highlightStars(value) {
    $(".rating i").each(function () {
      const starValue = $(this).data("value");
      $(this).toggleClass("ph-fill", starValue <= value);
    });
  }
});

// reveal animation
if (document.querySelector(".reveal")) {
  function imageReveal() {
    const revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
      let clipPath;

      // Left to right
      if (container.classList.contains("reveal--left")) {
        clipPath = "inset(0 0 0 100%)";
      }
      // Right to left
      if (container.classList.contains("reveal--right")) {
        clipPath = "inset(0 100% 0 0)";
      }
      // Top to bottom
      if (container.classList.contains("reveal--top")) {
        clipPath = "inset(0 0 100% 0)";
      }
      // Bottom to top
      if (container.classList.contains("reveal--bottom")) {
        clipPath = "inset(100% 0 0 0)";
      }

      const image = container.querySelector("img") || container.querySelector("div");

      // Animation trigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          //markers: true, // Turn on to show trigger markers
          toggleActions: "play none none none",
        },
      });

      // Animation timeline
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, {
        clipPath,
        duration: 1.2,
        delay: 0.2,
        ease: Power4.easeInOut,
      });
      if (container.classList.contains("reveal--overlay")) {
        tl.from(image, { clipPath, duration: 0.4, ease: Power4.easeOut });
      }
      tl.from(image, {
        scale: 1.4,
        duration: 1.3,
        delay: -1,
        ease: Power2.easeOut,
      });
    });

    ScrollTrigger.refresh();
  }

  imageReveal();
}


// add active class on click delivery card
$(".delivery-card").on("click", function () {
  // Remove 'active' class from all cards
  $(".delivery-card").removeClass("active");

  // Add 'active' class to the clicked card
  $(this).addClass("active");
});

// show/hide password

$("#toggle-password").on("click", function () {
  var passwordField = $("#password-input");
  var icon = $(this);

  // Toggle the input type
  if (passwordField.attr("type") === "password") {
    passwordField.attr("type", "text");
    icon.removeClass("ph-eye-slash").addClass("ph-eye");
  } else {
    passwordField.attr("type", "password");
    icon.removeClass("ph-eye").addClass("ph-eye-slash");
  }
});


// add year
$("#year").text(new Date().getFullYear());

// move on hover 
if (document.querySelector(".read-more-three")) {
  const els = document.querySelectorAll(".read-more-three");
  els.forEach((el) => {
    el.addEventListener("mousemove", function (e) {
      const x = e.offsetX + "px";
      const y = e.offsetY + "px";
      el.style.setProperty("--x", x);
      el.style.setProperty("--y", y);
      console.log(x, y)
    });
  })
}



// card animation
if (document.querySelector('.commitment')) {
  gsap.registerPlugin(ScrollTrigger);

  let cards = gsap.utils.toArray(".card");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".card-wrapper",
      pin: ".commitment",
      start: "-40% 20%",
      scrub: true,
      //  markers: true,
      end: () => "+=" + cards.length * cards[0].offsetHeight
    }
  });

  tl.add(() => {
    console.log("card", 1, "in place")
  }, 0.001);

  cards.slice(1).forEach((card, i) => {
    tl.fromTo(card, {
      yPercent: 0,
    }, {
      yPercent: -100,
      duration: 0.5,
    });
    tl.add(() => {
      console.log("card", (i + 2), "in place");
    })
  })
}
