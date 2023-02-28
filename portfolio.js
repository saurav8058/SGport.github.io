$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

       
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle'); 
         
        if($(window).scrollTop()>0){
            $('.top').show();
        }else{
            $('.top').hide();

        }

    });
    //smooth scrolling
    $('a[href*="#"]').on('click',function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
      },
         500,
         'linear'
      );
    });
});

   const li=document.querySelectorAll(".links");
   const sec=document.querySelectorAll("section");

   function activeMenu(){
     let len=sec.length;
     while(--len && window.scrollY + 97 < sec[len].offsetTop){}
     li.forEach(ltx => ltx.classList.remove("active"));
     li[len].classList.add("active");
}

   activeMenu();
   window.addEventListener("scroll",activeMenu);

