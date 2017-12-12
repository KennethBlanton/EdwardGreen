document.querySelector('.hamburger').addEventListener('click',function() {
	document.querySelector('.hamburger').classList.toggle('is-active');
	document.querySelector('.hamburger-menu').classList.toggle('active');
});

document.querySelector('.member').addEventListener('click',function() {
	document.querySelector('.member-menu').classList.toggle('active');
});


$(function() {
	TweenMax.from('.hero-text h1', 1, {opacity: 0, top: "-20px"});
	TweenMax.from('.hero-text p', 1, {opacity: 0, delay: 0.7});
});

