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


   let number= document.getElementById("number");
         let counter =0;
         setInterval(() =>{
             if(counter == 90){
                 clearInterval();
             }else{
                 counter+=1;
                 number.innerHTML=counter+ "%";
             }
         },20)
     
         let number1= document.getElementById("number1");
         let count =0;
         setInterval(() =>{
             if(count == 80){
                 clearInterval();
             }else{
                 count+=1;
                 number1.innerHTML=count+ "%";
             }
         },20)
         let number2= document.getElementById("number2");
         let coun =0;
         setInterval(() =>{
             if(coun == 70){
                 clearInterval();
             }else{
                 coun+=1;
                 number2.innerHTML=coun+ "%";
             }
         },20)
         let number3= document.getElementById("number3");
         let count2 =0;
         setInterval(() =>{
             if(count2 == 75){
                 clearInterval();
             }else{
                 count2+=1;
                 number3.innerHTML=count2+ "%";
             }
         },20)
         let number4= document.getElementById("number4");
         let count3 =0;
         setInterval(() =>{
             if(count3 == 77){
                 clearInterval();
             }else{
                 count3+=1;
                 number4.innerHTML=count3+ "%";
             }
         },20)
         let number5= document.getElementById("number5");
         let count4 =0;
         setInterval(() =>{
             if(count4 == 70){
                 clearInterval();
             }else{
                 count4+=1;
                 number5.innerHTML=count4+ "%";
             }
         },20)
         let number6= document.getElementById("number6");
         let count5 =0;
         setInterval(() =>{
             if(count5 == 70){
                 clearInterval();
             }else{
                 count5+=1;
                 number6.innerHTML=count5+ "%";
             }
         },20)
         let number7= document.getElementById("number7");
         let count6 =0;
         setInterval(() =>{
             if(count6 == 85){
                 clearInterval();
             }else{
                 count6+=1;
                 number7.innerHTML=count6+ "%";
             }
         },20)
         let number8= document.getElementById("number8");
         let count7 =0;
         setInterval(() =>{
             if(count7 == 85){
                 clearInterval();
             }else{
                 count7+=1;
                 number8.innerHTML=count7+ "%";
             }
         },20)
         let number9= document.getElementById("number9");
         let count8 =0;
         setInterval(() =>{
             if(count8 == 50){
                 clearInterval();
             }else{
                 count8+=1;
                 number9.innerHTML=count8+ "%";
             }
         },20)

         var typeData = new Typed(".role", {
            strings: [
              "Full Stack Developer",
              "Web Developer",
              "Youtuber",
              "Backend Developer",
              "Coder",
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000,
          });
