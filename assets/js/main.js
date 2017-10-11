console.log("Hello World from main.js!");
$(document).ready(function() {

document.body.scrollTop = 2;
})
	
var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel";
var yDelta=(/Firefox/i.test(navigator.userAgent))? "detail" : "deltaY";
var moving = false;
var delta = 0;
var up = false;
var down = false;
function addScrollJack() {
	document.addEventListener(mousewheelevt, control);
}
addScrollJack();
function control(e) {
	e.stopPropagation();
	e.preventDefault();
	// console.log(e);
	console.log(e[yDelta]);
	console.log(e.detail)
	if(e[yDelta] <= -1 && !up) {
		delta--
		// console.log(delta)
		// moving = true;

	} else if(e[yDelta] >=1 && !down) {
		delta++
		// console.log(delta);
		// moving = true;
	}else if (e[yDelta] >=1 && down) {
		delta = 0
	} else if(e[yDelta] <= -1 && up) {
		delta = 0
		// moving = true;

	}
	if(delta>3) {
		document.removeEventListener(mousewheelevt, control);
		$('.dot1>.move').addClass('active');
		document.body.scrollLeft = 500;
		setTimeout(function(){moving=false}, 500);
		$('.dot1').addClass('active');
		$('.dot2').addClass('new');
		delta = 0;
		setTimeout(addScrollJack,800);
	}else if(delta <-3) {
		document.removeEventListener(mousewheelevt, control);
		$('.dot1>.move').removeClass('active');
		document.body.scrollLeft = 0;
		setTimeout(addScrollJack,800);
		delta = 0;
		$('.dot1').removeClass('active');
		$('.dot2').removeClass('new');
	}

}

$(window).on('scroll', function () {
   console.log('hiasd')
});
// up -1 down is 1
// document.body.addEventListener("mousewheel", function(e){ e.preventDefault(); });

