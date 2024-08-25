let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
 menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
 }


 let section = document.querySelectorAll('section');
 let navlinks=document.querySelectorAll('header nav a');
  
 window.onscroll=()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top< offset+height){
            navlinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active')
            })
        }
        
    });
 }

 let header=document.querySelector('heaader');
 header.classList.toggle('sticky',window.scrollY>100);

 menuIcon.classList.romove('fa-xmark');
 navbar.classList.romove('active');


 ScrollReveal({
    distance:'80px', 
    duration:2000,
    delay:200,
 });
 ScrollReveal().reveal('.home-content,heading',{orign:'top'});
 ScrollReveal().reveal('.home-img  ')
