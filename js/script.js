/* Activador de jQuery */
$(document).ready(function(){
    $('aside#menu-CH nav a, header article nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });

    $('#abrir').click(function(){
        $('aside#menu-CH').animate({
            left: 0
        },300,'easeOutExpo');

        $('#abrir').hide();
        $('#cerrar').show();

        event.preventDefault();
    });

    $('#cerrar, aside#menu-CH nav a').click(function(){
        $('aside#menu-CH').animate({
            left: -290
        },300,'easeOutExpo');

        $('#abrir').show();
        $('#cerrar').hide();

        event.preventDefault();
    });
    // Activador de Slick Slider
    $('.slick-banner').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplaySpeed: 2000,
        speed: 700,
        infinite: true,
        arrows: true
    });
});