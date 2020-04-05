$(function(){
	
	var supportLineClamp = typeof document.body.style.webkitLineClamp != 'undefined';	

	if (!supportLineClamp) addEllipsis();

	$(window).resize(function(){
		if (!supportLineClamp) throttle(addEllipsis);
	});

	showPdf($('.brands-item'));

	// $('.download-icon').click(function(e){
	// 	e.stopPropagation();
	// })
	carouselImage();
});

function addEllipsis(){

	var articleIntro = document.querySelectorAll('.item-intro');
	// console.log(articleIntro.length);
	for (var i = 0; i < articleIntro.length; i++) {

		$clamp(articleIntro[i],{clamp : 2 , useNativeClamp : false});
	
	}
}

function throttle(method,context){
	
	clearTimeout(method.tId);

	method.tId = setTimeout(function(){
		method.call(context);
	},100);

};
$.fn.banner = function (options) {
	var elements = this;
	var $items;
	var index = 0;
	var settings = {
		active: '.active',
		items: '.banner-item',
		timeout: 1000
	};
	if (options) {
		$.extend(settings, options);
	}
	$container = $(this);
	if ($container.length) {
		$items = $container.find(settings.items);
	}

	function loop() {
		$items.removeClass(settings.active);
		$($items[index]).addClass(settings.active);
		index++;
		if (index == $items.length) {
			index = 0;
		}
		setTimeout(arguments.callee, settings.timeout);
	}
	function start() {
		setTimeout(loop, settings.timeout);
	}
	start();
};
function carouselImage() {
	$('.js-banner').banner({
		active: 'banner-active',
		timeout: 10000
	});
};