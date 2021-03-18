/**
 * Created by Royex Technologies on 7/8/2020.
 */

var $window = $(window),
    $body = $('body'),
    container = $('.body-width'),
    fullWidth = $body.outerWidth(),
    containerWidth = container.outerWidth(),
    containerGutter = (fullWidth-containerWidth)/2 + 15;


/*============================
 utilities
 ============================*/
// preloader
var $preLoader = $('.loader');

function preloader(element) {
    if(element.length>0){
        element.delay(500).fadeOut(300);
    }
}
$(document).ready(function () {
    preloader($preLoader);
});

$(window).scroll(function () {
    if($(window).scrollTop()>0){
        // $('.header').addClass('sticked');
    }else{
        // $('.header').removeClass('sticked');
    }
});


// var swiper = new Swiper('.slide-inner');
var swiper = new Swiper('.slide-inner', {
    speed: 700,
    spaceBetween: 30,
    autoplay:true,
    resistanceRatio : 0.65,
    loop:true,
    watchSlidesProgress:true,
    watchSlidesVisibility:true,
    // effect:'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        type: 'bullets'
    },
    on: {
        init: function (swiper) {
            // console.log('initiated');
            // $('.slide-content').show();
        },
        slideChange: function(swiper){
            // var slider = $( swiper.slides[ swiper.activeIndex ] );
            // slider.find('.slide-content').show('slow');
        },
        transitionStart: function(swiper){
            // console.log('transition started');
            // $('.slide-content').hide();
        },
        transitionEnd: function (swiper) {
            // $('.slide-content').hide('slow');
        }
    }
});

if($('.screens-slider').length){
    var swiperScreens = new Swiper('.screens-slider', {
        slidesPerView: 2,
        spaceBetween: 10,
        watchSlidesProgress:true,
        watchSlidesVisibility:true,
        speed:500,
        navigation: {
            nextEl: '.screens-slider-holder .swiper-button-next',
            prevEl: '.screens-slider-holder .swiper-button-prev'
        },
        breakpoints:{
            570:{
                slidesPerView: 2,
                spaceBetween: 10
            },
            768:{
                slidesPerView: 3,
                spaceBetween: 20
            },
            992:{
                slidesPerView:4,
                spaceBetween:20
            },
            1200:{
                slidesPerView:5,
                spaceBetween:20
            }
        }
    });
}

if($('.page-content').length>0){
    $('.page-content').css('margin-top',$('.header').height()+"px");
}

// initialiizing wow
//initializing [wow.js]

var wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
);
wow.init();

//initializing [wow.js]

function createBodyLayer(){
    $('.navbar').append("<div class='body-layer-menu'></div>");
}
function removeBodyLayer(){
    setTimeout(function () {
        $('.body-layer-menu').remove();
    },0);

}

function slickNavInit(menu_element){
    $(menu_element).slicknav({
        'duration':0,
        closedSymbol: '&plus;',
        openedSymbol:'&minus;',
        // 'beforeOpen': function () {
        //     createBodyLayer();
        //     $('body').addClass('nav-opened');
        // },
        // 'afterClose':function (){
        //     $('body').removeClass('nav-opened');
        // }
        prependTo:'.navbar'
    });
}
slickNavInit($('#navbarNav'));

$('.navbar-toggler').click(function () {
    createBodyLayer();
    $('body').addClass('nav-opened');
    $('#navbarNav').slicknav('toggle');
});
$(document).on('click','.body-layer-menu',function () {
    $('#navbarNav').slicknav('close');
    removeBodyLayer();
    $('body').removeClass('nav-opened');
});

$(document).on('click','.menu-close',function () {
    $('#navbarNav').slicknav('close');
    removeBodyLayer();
    $('body').removeClass('nav-opened');
});