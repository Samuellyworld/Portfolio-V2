const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const bigSamToggle = document.getElementById('big');

function darkMode() {
	toggleIcon.classList.remove('fa-sun');
	// toggleIcon.children[1].classList.remove('ink')
	toggleIcon.classList.add('fa-moon');
	bigSamToggle.src = '../assets/anime.gif'
}
function lightMode() {
	
	toggleIcon.classList.remove('fa-moon')
	toggleIcon.classList.add('fa-sun');
	// toggleIcon.children[1].classList.add('ink');
	 bigSamToggle.src = '../assets/sam.png'
	}

	// toggle theme dynamically 
function switchTheme(event) {
	if(event.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
		darkMode();
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light')
		lightMode();
	}
}
// check localstorage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme)
	if(currentTheme === 'dark') {
		toggleSwitch.checked = true;
		darkMode();
	}
}

toggleSwitch.addEventListener('change', switchTheme);