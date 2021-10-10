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
    }, 12000)
 
    
   
}

mainContentPage()