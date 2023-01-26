$(function(){

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    var containerEl1 = document.querySelector('[data-ref="products-categories"]');
    var containerEl2 = document.querySelector('[data-ref="design-categories"]');
 
    var config = {
    controls: {
      scope: 'local'
        }
    };
 
    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
});