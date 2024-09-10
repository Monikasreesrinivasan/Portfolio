//toggle icon navbar
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('header nav');
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('header nav a');
  
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
  
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
  
        sections.forEach(sec => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
            const navLink = document.querySelector(`header nav a[href="#${id}"]`);
  
            if (scrollPosition >= offset && scrollPosition < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
  
        const header = document.querySelector('header');
        header.classList.toggle('sticky', scrollPosition > 100);
  
        // Remove toggle icon and navbar when clicking navbar link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            });
        });
    });
  });
  
  
  
  
  
  
  //typing animation
  var typed = new Typed(".typing",{
    strings:["","Frontend Developer","Full Stack Developer","Python Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop :true
  })
  
  
  
  //about section
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  
  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
  
  
  // effect when scroll
  ScrollReveal({
    reset:true,
    distance:'80px',
    duration: 1000,
    delay:50
  });
  
  ScrollReveal().reveal('.home-content, .heading, .gallery', {origin:'top'});
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .portfolio p, .contact form, .navigation, .touch, .contact p, .more-proj, .gallery h3, .timeline-dot,.timeline-dot1, .descc, .timeline-items1', {origin:'bottom'});
  ScrollReveal().reveal('.home-content h1, .about-img, .eduleft, .skillleft', {origin:'left'});
  ScrollReveal().reveal('.home-content p, .about-content, .eduright, .skillright, .expright', {origin:'right'});