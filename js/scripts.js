 

  $(document).ready(function() {     
    $('.nclbs').click(function() {
        $('.hidd-st').slideToggle('');
        $('.nclbs').toggleClass("str-full");
    });




    $('.nclbs2').click(function() {
        $('.hidd-st2').slideToggle('');
        $('.nclbs2').toggleClass("str-full2");
    });


    $('.nclbs3').click(function() {
        $('.prol-st').slideToggle('');
        $('.nclbs2').toggleClass("str-fulls2");
    });
 });

 $(document).ready(function() {
     $('input,textarea').focus(function() {
         $(this).data('placeholder', $(this).attr('placeholder'))
         $(this).attr('placeholder', '');
     });
     $('input,textarea').blur(function() {
         $(this).attr('placeholder', $(this).data('placeholder'));
     });
 });

 (function($) {
     $(function() {
         $('input, select').styler({
             selectSearch: true
         });
     });
 })(jQuery);
 $(function() {

     $('.stm-form').on('click', function(e) {
         $('html,body').stop().animate({ scrollTop: $('#stm-form').offset().top }, 700);
         e.preventDefault();
     });

 });




 $(function() {
     $(".tool").tooltip({
         position: {
             my: "center bottom-10",
             at: "center top",
             using: function(position, feedback) {
                 $(this).css(position);
                 $("<div>")
                     .addClass("arrow")
                     .addClass(feedback.vertical)
                     .addClass(feedback.horizontal)
                     .appendTo(this);
             }
         }
     });
 });

 var menu_selector = ".top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.

 function onScroll() {
     var scroll_top = $(document).scrollTop();
     $(menu_selector + " a").each(function() {
         var hash = $(this).attr("href");
         var target = $(hash);
         if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
             $(menu_selector + " a.active").removeClass("active");
             $(this).addClass("active");
         } else {
             $(this).removeClass("active");
         }
     });
 }

 $(document).ready(function() {

     $(document).on("scroll", onScroll);

     $("a[href^=#]").click(function(e) {
         e.preventDefault();

         $(document).off("scroll");
         $(menu_selector + " a.active").removeClass("active");
         $(this).addClass("active");
         var hash = $(this).attr("href");
         var target = $(hash);

         $("html, body").animate({
             scrollTop: target.offset().top
         }, 500, function() {
             window.location.hash = hash;
             $(document).on("scroll", onScroll);
         });

     });

 });




 $(function() {

     $(window).scroll(function() {

         if ($(this).scrollTop() > 1500) {

             $('#toTop').fadeIn();

         } else {

             $('#toTop').fadeOut();

         }

     });

     $('#toTop').click(function() {

         $('body,html').animate({ scrollTop: 0 }, 800);

     });

 });


 $(document).ready(function() {
     $('input,textarea').focus(function() {
         $(this).data('placeholder', $(this).attr('placeholder'))
         $(this).attr('placeholder', '');
     });
     $('input,textarea').blur(function() {
         $(this).attr('placeholder', $(this).data('placeholder'));
     });
 });


 $(function() {

     $('.skrl').on('click', function(e) {
         $('html,body').stop().animate({ scrollTop: $('.form-st').offset().top }, 700);
         e.preventDefault();
     });

 });




 $(document).ready(function() {

     //main nav
     $(window).on('scroll load', function() {
         updateMainNav();
     });

     function updateMainNav() {
         if ($(window).scrollTop() >= 0) {
             $('body').addClass('minimize-menu');
         } else {
             $('body').removeClass('minimize-menu');
         }
     }

     $('.user-nav > a').on('click', function() {
         $('body').toggleClass('show-user-nav');
     });

     $(document).on('click', function(event) {
         $('body').removeClass('show-user-nav');
     });

     $('.collapse-main-nav').on('click', function() {
         if ($('body').toggleClass('show-main-nav').hasClass('show-main-nav')) window.scrollTo(0, 0);
         return false;
     });

 });


 var menu_selector = ".top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.

 function onScroll() {
     var scroll_top = $(document).scrollTop();
     $(menu_selector + " a").each(function() {
         var hash = $(this).attr("href");
         var target = $(hash);
         if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
             $(menu_selector + " a.active").removeClass("active");
             $(this).addClass("active");
         } else {
             $(this).removeClass("active");
         }
     });
 }

 $(document).ready(function() {

     $(document).on("scroll", onScroll);

     $("a[href^=#]").click(function(e) {
         e.preventDefault();

         $(document).off("scroll");
         $(menu_selector + " a.active").removeClass("active");
         $(this).addClass("active");
         var hash = $(this).attr("href");
         var target = $(hash);

         $("html, body").animate({
             scrollTop: target.offset().top
         }, 100, function() {
             window.location.hash = hash;
             $(document).on("scroll", onScroll);
         });

     });

 });


 $(document).ready(function() {
     $('.single-item').slick({
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         adaptiveHeight: true
     });


     $('.single-items').slick({
         dots: false,
         infinite: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         adaptiveHeight: true
     });

 });


 $(function() {
     $("#accordion").accordion({
         heightStyle: "content"
     });
 });





 // Как только будет загружен API и готов DOM, выполняем инициализацию
 ymaps.ready(init);

 function init() {
     var myMap = new ymaps.Map("map", {
         center: [55.6233136, 37.7047289],
         zoom: 14,
         controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
     });
     myMap.behaviors.disable('scrollZoom');


     // Создаем метку и задаем изображение для ее иконки
     myPlacemark = new ymaps.Placemark([55.6233136, 37.7047289], {
         balloonContent: 'г. Москва, Новочеркасский бульвар 20, офис 17'
     }, {
         iconImageHref: 'http://api.yandex.ru/maps/doc/jsapi/2.x/examples/images/myIcon.gif', // картинка иконки
         iconImageSize: [30, 42], // размеры картинки
         iconImageOffset: [-3, -42] // смещение картинки
     });


     // Добавление метки на карту
     myMap.geoObjects.add(myPlacemark);

 }