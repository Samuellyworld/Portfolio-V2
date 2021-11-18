const preloaderDiv = document.getElementById('preloader')
const preloaderSpinner = document.querySelector('.preloader-spinner');
// const preloaderTextContent = document.querySelector('.text-content');
const preloaderTextContainer = document.querySelector('.preloader-text-container');
const mainContent = document.getElementById('main-content');



let preloaderIsPaused = false;

const preloader = () => {
    preloaderDiv.hidden = false
    preloaderSpinner.hidden = false;
    // preloaderTextContent.hidden = true;
    
   setTimeout(() => {
    loadTextPreloader()
   }, 2000)
     
}

const loadTextPreloader =  () => {
    mainContent.hidden = true;
    preloaderSpinner.hidden = true;
    preloaderTextContainer.hidden = false;
    
//     setTimeout(() => {
//         preloaderSpinner.hidden = true;
//       preloaderTextContent.textContent = 'Frontend with React 🚀';  
//     }, 1000);
//     setTimeout(() => {
//         preloaderSpinner.hidden = true
//       preloaderTextContent.textContent = 'Backend with NodeJs 🕵🤳 ';
//     }, 2000);
//     setTimeout(() => {
//         preloaderSpinner.hidden = true
//       preloaderTextContent.textContent = 'Fullstack Developer 👉👈';
//     }, 3000);
// 
}

const mainContentPage =  () => {
    preloader();
 setTimeout(() => {
       preloaderDiv.hidden = true;
       mainContent.hidden = false;
       AOS.init({
        delay: 200, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        });
    //     const scroll = new LocomotiveScroll({
    //         el: document.querySelector('[data-scroll-container]') ,
    //         smooth: true
    //         reloadOnContextChange: true,
    //         multiplier: 0.65,
    //         inertia: 0.3,
    //   });
    }, 12000)
 
    
   
}

mainContentPage()