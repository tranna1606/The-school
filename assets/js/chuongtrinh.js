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