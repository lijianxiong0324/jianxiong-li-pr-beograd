const header = document.querySelector('.header');
const home = document.querySelector('.home-container');
const arrowUp = document.querySelector('.arrow-up');

const headerHeight= header.getBoundingClientRect().height;
console.log(headerHeight);
const homeHeight= document.querySelector('#home').offsetHeight;
const aboutheight= document.querySelector('#about').offsetHeight;
console.log(aboutheight);


document.addEventListener('scroll', () => {
if(window.scrollY >headerHeight){
    header.classList.add('header--dark');
}else{
    header.classList.remove('header--dark');
}
});

document.addEventListener('scroll', () => {
    home.style.opacity = 1- window.scrollY / homeHeight;
});

document.addEventListener('scroll', () => {
 if(window.scrollY 
    < homeHeight){
    arrowUp.style.visibility = 'hidden';
 }
 else{
    arrowUp.style.visibility = 'visible';
 }
});

//navbar toggle button
const navbarMenu = document.querySelector('.header_menu');
const  navbarToggle= document.querySelector('.header_toggle');

navbarToggle.addEventListener('click', () =>{
    navbarMenu.classList.toggle('open');

});
navbarMenu.addEventListener('click', () =>{
navbarMenu.classList.remove('open');
});

