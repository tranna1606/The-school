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
    if(scroll>2660) {
      $('.slogan-text').css('animation','moveInleft  ease .5s')
      $('.slogan-pic').css('animation','moveInright ease .5s')
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

  $('.mobile-menu-link').click(function() {
    if (!$('.mobile-menu-list').hasClass('active-mobile-menu')) {
      $('.mobile-menu-list').addClass('active-mobile-menu');
      $('.header-scroll').css('background-color','#003057');
      $('.header-name').css('color','white'); 
      $(this).children('i').attr('class','fa-solid fa-x')
    } else {
      $('.mobile-menu-list').removeClass('active-mobile-menu');
      $('.header-scroll').css('background-color',''); 
      $('.header-name').css('color',''); 
      $(this).children('i').attr('class','fa-solid fa-bars') 
    }
  })



})