const hamburger=document.querySelector('.header .nav-bar .nav-list .hamburger');
const menu=document.querySelector('.header .nav-bar .nav-list ul');
const header=document.querySelector('.header');
const select=document.querySelectorAll('.header .nav-bar .nav-list ul li a')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    
})

 select.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
       
    });
 })
    

document.addEventListener('scroll',()=>{
    var scroll_position=window.scrollY;
    if(scroll_position > 250){
       
        header.style.backgroundColor="#29323c";
    }else{
        header.style.backgroundColor="transparent";
    }
})