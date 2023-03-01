$(function(){

    $('.shop__content-filter__btn').on('click', function (){
        $('.shop__content-filter__btn').removeClass('shop__content-filter__btn--active');
        $(this).addClass('shop__content-filter__btn--active');
    });

    $('.button-list').on('click', function(){
        $('.products__item').addClass('products__item-list')
    });

    $('.button-flex').on('click', function(){
        $('.products__item').removeClass('products__item-list')
    });

    $('.price-filter__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.price-filter__from').text(data.from);
            $('.price-filter__to').text(data.to);
        },
        onChange: function (data) {
            $('.price-filter__from').text(data.from);
            $('.price-filter__to').text(data.to);
        },

    })

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    
    $(".star").rateYo({
        starWidth: "10px",
        normalFill: "#d6d6d6",
        readOnly: true,
        spacing: "6px"
    });
    $(".products__star").rateYo({
        starWidth: "20px",
        normalFill: "#A0A0A0",
        readOnly: true,
        ratedFill: "#ffcc00",
        spacing: "6px"
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