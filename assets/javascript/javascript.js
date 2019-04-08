// define Varabile global
let oneServ = true;
let oneAbout = true;
var lastScrollTop = 0;
const firstText = document.getElementById('firsText');
const secText = document.getElementById('secondText');
let arrFigure = document.getElementsByClassName('gallery')[0].children;
let arrAbout = document.querySelector('#about article').children;
// define Varabile global

// hidden element
arrAbout[0].style.right = '-500px';
arrAbout[0].style.opacity = '0';
arrAbout[1].style.opacity = '0';
for(let i = 0; i < arrFigure.length; i++){
    arrFigure[i].style.left = '-40px';
    arrFigure[i].style.opacity = '0';
    arrFigure[i].style.transition = 'all 2s ease-in-out';
}

firstText.style.left = '-580px';
secText.style.left = '-580px';
// hidden element
setTimeout(() => {
    // define transition 
document.getElementById('navMenu').style.transition = 'all 2s ease-in-out';
firstText.style.transition = 'left 3s ease-in-out';
secText.style.transition = 'left 3s ease-in-out';
arrAbout[0].style.transition = 'all 2s ease-in-out';
arrAbout[1].style.transition = 'all 2s ease-in-out';
for(let i = 0; i < arrFigure.length; i++){
    arrFigure[i].style.transition = 'all 2s ease-in-out';
}

// define transition
}, 300);


function menuMove(){
    let scrollPosition = window.pageYOffset;
    let navClass = document.getElementById('navMenu');
    if(scrollPosition > 100 && navClass.className == "menu" ){
        navClass.classList.add('toggleMenu');
    }else if(scrollPosition < 80 && navClass.className == "menu toggleMenu" ){
        navClass.classList.remove('toggleMenu');
    }
}
function galleryMove(){
    let services = document.getElementById('services').getBoundingClientRect().top;
    if(services < window.innerHeight/2 && oneServ){
        oneServ = false;
        let timer = 300;
        for(let i = 0; i < arrFigure.length; i++){
            setTimeout(()=>{
                arrFigure[i].style.left = '0';
                arrFigure[i].style.opacity = '1';
            },timer);
            timer += 200;
        }
    }
}
function aboutMove(){
    let about = document.getElementById('about').getBoundingClientRect().top;
    if(about < window.innerHeight/2 && oneAbout){
        oneAbout = false;
        setTimeout(()=>{
            arrAbout[0].style.right = '0';
            arrAbout[0].style.opacity = '1';
            },700);
        setTimeout(()=>{
            arrAbout[1].style.opacity = '1';
            },2500);
    }
}
function arrowvisibility(){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
        // downscroll code
        document.querySelector('.arrowUp').style.visibility = 'visible';
    } else {
        // upscroll code
        document.querySelector('.arrowUp').style.visibility = 'hidden';
    }
    lastScrollTop = st <= 0 ? 0 : st;
}

function slideText(){
    setTimeout(()=>{firstText.style.left = '0'}, 1000);
    setTimeout(()=>{secText.style.left = '0'}, 3000);
}

// define event listener
window.addEventListener('scroll', menuMove);
window.addEventListener('scroll', galleryMove);
window.addEventListener('scroll', aboutMove);
window.addEventListener('scroll', arrowvisibility);
window.addEventListener('load', slideText);


