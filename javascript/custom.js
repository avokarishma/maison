$(document).ready(function () {
    $(".open").click(function () {
        $("body").addClass("toggle");
    });
    $(".closebutton").click(function(){
        $("body").removeClass("toggle")
    });
});
// main banner slider endSlider Script//
var isPaused = false; // Tracks the slider state
var isMuted = false;  // Tracks audio mute state
var sliderInterval = setInterval(() => {
    if (!isPaused) slider();
}, 3000);

function slider(flag, num) {
    var current = $(".item.current"),
        next,
        index;
    if (!flag) {
        next = current.is(":last-child") ? $(".item").first() : current.next();
        index = next.index();
    } else if (flag === 'dot') {
        next = $(".item").eq(num);
        index = num;
    } else {
        next = current.is(":first-child") ? $(".item").last() : current.prev();
        index = next.index();
    }
    next.addClass("current");
    current.removeClass("current");
    $(".dot").eq(index).addClass("current").siblings().removeClass("current");
}

// Pause Button Functionality with Icon Toggle
$("#pause-btn").click(function() {
    isPaused = !isPaused;
    $(this).find("img").attr("src", isPaused ? "img/Play.svg" : "img/Pause.svg");
});

// Mute Button Functionality with Icon Toggle (assuming audio is added to the slider)
var audio = new Audio('path/to/your-audio-file.mp3'); // Add audio file here
audio.loop = true; // Loop audio to match slider
audio.play();

$("#mute-btn").click(function() {
    isMuted = !isMuted;
    audio.muted = isMuted;
    $(this).find("img").attr("src", isMuted ? "img/unmute.svg" : "img/Mute.svg");
});

// Start/Stop audio with slider pause/play
$("#pause-btn").click(function() {
    if (isPaused) {
        audio.pause();
    } else {
        audio.play();
    }
});
// main banner slider end
$(".button").on("click", function () {
    clearInterval(setSlider);
    var flag = $(this).is(".prev") ? true : false;
    slider(flag);
    setSlider = setInterval(slider, 4000);
});

$(".dot").on("click", function () {
    if ($(this).is(".current")) return;
    clearInterval(setSlider);
    var num = $(this).index();
    slider('dot', num);
    setSlider = setInterval(slider, 4000);
});
function scrollTop() {
    // 500 -> This is the value in px of the distance to be scrolled for the 'scroll-to-top' button to show-up
    if ($(window).scrollTop() > 500) {
        $(".backToTopBtn").addClass("active");
    } else {
        $(".backToTopBtn").removeClass("active");
    }
}
$(function () {
    // show and hide btn
    scrollTop();
    $(window).on("scroll", scrollTop);

    // body scroll on btn click
    $(".backToTopBtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1);
        return false;
    });
});

// slider_perfume start
$(document).ready(function () {
    $('.slide-wrapper').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 4000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            }
        ]
    });
});


// Function to switch images
function changeImage(index) {
    const images = document.querySelectorAll('.image');
    const dots = document.querySelectorAll('.dot');

    // Remove active class from all images and dots
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to the selected image and dot
    images[index].classList.add('active');
    dots[index].classList.add('active');
}
