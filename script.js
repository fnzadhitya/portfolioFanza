

//toggle class hamburger-menu
const ul = document.querySelector('ul');

document.querySelector('#hamburger-menu') .onclick = () => {
ul.classList.toggle('active');
};

//untuk search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button') .onclick = () => {
	searchForm.classList.toggle('active');
};




const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener ('click'), function(e)
	if (!hamburger.contains(e.target) && !ul.contains(e.target)) {
	u1.classList.remove('active');
	
}
;