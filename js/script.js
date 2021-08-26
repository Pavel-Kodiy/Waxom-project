$(document).ready(function() {
   $(".burger__menu, .nav__list_link").click(function(event) {
      $(".burger__menu, .nav").toggleClass("active");
      $("body").toggleClass("lock");
   });

   $(".slider").slick({
      arrows:true,
      dots:true,
      slidesToShow:1,
      speed:1000,
      infinite:true,
      centerMode:false,
      variableWidth:true,
   });

   $(".block__title").click(function(event){
      $(this).toggleClass("active").next().slideToggle(500);
    });

  $(".posts__container_slider").slick({
   arrows:true,
   dots:false,
   slidesToShow:1,
   speed:1000,
   infinite:true,
   centerMode:true,
   variableWidth:true,
  });

  $(".nav__list_link").on("click","a", function (event) {
        event.preventDefault();
 
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
          
        $('body,html').animate({scrollTop: top}, 1500);
    });  

   
    $(".latest-projects_button").on("click","a", function (event) {
      event.preventDefault();

      let id  = $(this).attr('href'),
          top = $(id).offset().top;
      
      $('body,html').animate({scrollTop: top}, 1000);
      }); 
 

    

  $(".wild").click(function(event) {
   $("#wild").toggleClass("show");
   });

   $(".illustration").click(function(event) {
      $("#illustration").toggleClass("show");
      });
   
   $(".app").click(function(event) {
      $("#app").toggleClass("show");
      }); 
   
   $(".web").click(function(event) {
      $("#web").toggleClass("show");
      });

    $(".photo").click(function(event) {
      $("#photo").toggleClass("show");
      });   

   $(".content__item").click(function(event){
      $(".content__item").removeClass("show");
   });

   $(".play").click(function(event) {
      $(".video-presentation__container_text").toggleClass("fullscreen");
      $(".video-presentation__container_img").toggleClass("fullscreen");
     
      }); 

   $(".full-screen__video").click(function(event){
       $(".video-presentation__container_text").removeClass("fullscreen");
       $(".video-presentation__container_img").removeClass("fullscreen");
       
      });

      $(".img-search").click(function(event) {
         $(".input").toggleClass("hear");
         });    
   
      $(".popup__close").on("click","a", function (event) {
      
            $(".popup").removeClass("target");
         });

         let button = $('#button-up');	
         $(window).scroll (function () {
           if ($(this).scrollTop () > 300) {
             button.fadeIn();
           } else {
             button.fadeOut();
           }
       });	 
       button.on('click', function(){
       $('body, html').animate({
       scrollTop: 0
       }, 800);
       return false;
       });		
       
      $(".button").click(function(event){
         $("body").toggleClass("lock");
      });

      $(".ideas-footer__conteiner_button").click(function(event){
         $("body").toggleClass("lock");
      });

      $(".latest-projects__container_button").click(function(event){
         $("body").toggleClass("lock");
      });

      $(".link").click(function(event){
         $("body").toggleClass("lock");
      });

      $(".popup__close").click(function(event){
         $("body").removeClass("lock");
      });



});