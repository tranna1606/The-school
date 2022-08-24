$(document).ready(function() {
    $('.slider-img').slick({
        infinite: true,
        slidesToShow: 3, 
        centerMode:true, 
        autoplay: true, 
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
          {
            breakpoint: 739,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1, 
              arrows : false,
            }
          },
        ]
    })
})