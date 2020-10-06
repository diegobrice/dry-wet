(function () {
	AOS.init();
}());

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1800,
	offset: 90
});

var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});