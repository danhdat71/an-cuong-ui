// Ao
AOS.init();

// Slider
const sliderTimeDelay = 3000;
var swiper = new Swiper(".slider", {
    spaceBetween: 0,
    effect: "fade",
    autoplay: {
        delay: sliderTimeDelay,
        disableOnInteraction: false
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            let degreeProcessed = 360 - (time * 360 / sliderTimeDelay);
            $('.slider .process-circle .circle').css({'background' : `conic-gradient(var(--color-highlight) ${degreeProcessed}deg, rgb(255, 255, 255) 0deg)`});
        }
    }
}).on('slideChange', function (e) {
    $('.text-effect-show-slider').removeClass('text-effect-show-slider');
    setTimeout(function(){
        $('.wrap-slider .swiper-slide-active .wrap-slider-content').find('.content').addClass('text-effect-show-slider');
    }, 100);
});

let processCircle = `<div class="process-circle">
            <div class="circle"></div>
            <div class="round"></div>
            </div>`;
$('.swiper-pagination-bullet').append(processCircle);




// Menu
$('.item-submenu-2').click(function (e) {
    e.preventDefault();
    let _this = $(this);
    _this.find('.item-submenu-2-a').toggleClass('hight-light-item');
    _this.find('.sub-menu-3').toggle(200);
    _this.find('.icon').toggleClass('active-down-plus');
});

$('.sub-menu-3 a').click(function (e) {
    e.stopPropagation();
});

$(function () {
    let overlayMenu = $('.overlay-menu');
    $('.header-bottom .menu-left li.has-sub').hover(function () {
        overlayMenu.css({ 'height': '100%', 'opacity': '1' });
    }, function () {
        overlayMenu.css({ 'height': '0', 'opacity': '0' });
    });
});

// Search box
$('.header-bottom .menu-end .search').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).find('.search-box').toggleClass('active-search-box');
});

$('.header-bottom .menu-end .search .search-box').click(function (e) {
    e.stopPropagation();
});

$('html').click(function () {
    $(this).find('.search-box').removeClass('active-search-box');
});