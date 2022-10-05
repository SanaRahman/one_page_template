$(document).ready(function(){
$(window).scroll(function(){
    if(this.scrollY>20){
        $('.navbar').addClass("sticky");
    }
    else{
        $('.navbar').removeClass("sticky");
    }
    if(this.scrollY>500){
        $('.scroll-btn').addClass("show");
    }else{
        $('.scroll-btn').removeClass("show"); 
    }
});

$('.scroll-btn').click(function(){
$('html').animate({scrollTop:0});
});

$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
});
});
/* typing animation */
var typed=new Typed(".typing",{
    strings:["Web Developer","Android Developer","FrontEnd Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});