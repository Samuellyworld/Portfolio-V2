const preloaderDiv = document.getElementById('preloader')
const preloaderSpinner = document.querySelector('.preloader-spinner');
const preloaderTextContent = document.querySelector('.text-content');

const preloader = () => {
    preloaderSpinner.hidden = false
    setTimeout(() => {
        preloaderSpinner.hidden = true
      preloaderTextContent.textContent = 'Frontend with React';
    }, 1000);
    setTimeout(() => {
        preloaderSpinner.hidden = true
      preloaderTextContent.textContent = 'Backend with NodeJs';
    }, 2000);
    setTimeout(() => {
        preloaderSpinner.hidden = true
      preloaderTextContent.textContent = 'Fullstack Developer';
    }, 3000);
    preloaderSpinner.hidden = false
   
}

preloader()