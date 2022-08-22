$(document).ready(function() {
    $(document).scroll(function(){
        var scroll= $(window).scrollTop();
        var header=$('.header-scroll');
        if(scroll>= 120){
          header.addClass('sticky');
        }else{
          header.removeClass('sticky');
        }
      })

    $('.experience-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    }); 

    $('.question-item-right>i').click(function() { 
      if (!$(this).hasClass("openAnswer")) {
        $(this).css('transform', 'rotate(0)');  
        $(this).addClass("openAnswer");
        $(this).closest('.question-item-title').siblings('.question-item-answer').css('display','block');
      } else {
        $(this).css('transform', 'rotate(-90deg)');  
        $(this).removeClass("openAnswer");
        $(this).closest('.question-item-title').siblings('.question-item-answer').css('display','none');
      }
    })


    let resg= $('.js-btn-signup');
    let modal=$('.js-modal');
    let modal_container=$('.js-modal-container');
    let modal_close=$('.js-modal-close');
  
    resg.click(function() {
      modal.addClass('open');
      $('body').css('overflow','hidden'); 
    })
  
    modal_close.click(function() {
      modal.removeClass('open');
      $('body').css('overflow','');  
    })
  
    modal_container.click(function(event) {
      event.stopPropagation();
    })
  
    modal.click(function() {
      modal.removeClass('open');
      $('body').css('overflow','');   
    })


})