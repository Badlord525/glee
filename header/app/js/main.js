$(function(){

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.shop__content-filter__button-new').on('click', function(){
        $('.shop__filters').slideToggle();
    });
    
    $('.detalis-tabs__top-title').on('click', function(e){
        e.preventDefault();
        $('.detalis-tabs__top-title').removeClass('detalis-tabs__top-title--active');
        $(this).addClass('detalis-tabs__top-title--active');

        $('.detalis-tabs__content-item').removeClass('detalis-tabs__content-item--active');
        $($(this).attr('href')).addClass('detalis-tabs__content-item--active');
    })
    

    $('.related-items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.detalis-slide__thumb').slick({
        asNavFor: '.detalis-slide__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
        
    });
    $('.detalis-slide__big').slick({
        asNavFor: '.detalis-slide__thumb',
        draggable: false,
        arrows: false,
        fade: true
    });

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
    $('.detalis-item__num').styler({

    });

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

    $(".detalis-item__star").rateYo({
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