const preloaderDiv = document.getElementById('preloader')
const preloaderSpinner = document.querySelector('.preloader-spinner');
const preloaderTextContent = document.querySelector('.text-content');
const mainContent = document.getElementById('main-content');



let preloaderIsPaused = false;

const preloader = () => {
    preloaderDiv.hidden = false
    preloaderSpinner.hidden = false;
    preloaderTextContent.hidden = true;
    loadTextPreloader()
   
     
}

const loadTextPreloader =  () => {
    mainContent.hidden = true;
    preloaderTextContent.hidden = false;
    
    setTimeout(() => {
        preloaderSpinner.hidden = true;
      preloaderTextContent.textContent = 'Frontend with React 🚀';  
    }, 1000);
    setTimeout(() => {
        preloaderSpinner.hidden = true
      preloaderTextContent.textContent = 'Backend with NodeJs 🕵🤳 ';
    }, 2000);
    setTimeout(() => {
        preloaderSpinner.hidden = true
      preloaderTextContent.textContent = 'Fullstack Developer 👉👈';
    }, 3000);
}

const mainContentPage =  () => {
    preloader();
 setTimeout(() => {
       preloaderDiv.hidden = true;
       mainContent.hidden = false;
    }, 4000)
 
    
   
}

mainContentPage()