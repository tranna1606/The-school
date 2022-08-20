$(document).ready(function() {
  //scroll header
  $(document).scroll(function(){
    var scroll= $(window).scrollTop();
    var header=$('.header-scroll');
    if(scroll>= 120){
      header.addClass('sticky');
    }else{
      header.removeClass('sticky');
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