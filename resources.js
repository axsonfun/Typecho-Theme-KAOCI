$(function () {

	var supportLineClamp = typeof document.body.style.webkitLineClamp != 'undefined';

	if (!supportLineClamp) addEllipsis();

	$(window).resize(function () {
		if (!supportLineClamp) throttle(addEllipsis);
	});


	// showPdf($('.content-column'));

	carouselImage();

	$('.graphics-category .see-all').click(function () {
		$('.graphics-category .content-column').each(function () {
			$(this).removeClass('item-hide');
		})
	});

	$('.icons-category .see-all').click(function () {
		$('.icons-category .content-column').each(function () {
			$(this).removeClass('item-hide');
		})
	});


	// showWallpaper();

});

function addEllipsis() {

	var articleIntro = document.querySelectorAll('.banner-desc');
	for (var i = 0; i < articleIntro.length; i++) {
		$clamp(articleIntro[i], { clamp: 2, useNativeClamp: false });
	}
}

function throttle(method, context) {

	clearTimeout(method.tId);

	method.tId = setTimeout(function () {
		method.call(context);
	}, 100);

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

function showWallpaper(){
	var wallpaperSticky = document.querySelector('.wallpaper-sticky');
	var wallpaperMask = document.querySelector('.wallpaper-mask');
	var wallpaperClose = document.querySelector('.wallpaper-close');

	wallpaperSticky.addEventListener('click',function(){
		document.body.style.overflow = "hidden";
		wallpaperMask.classList.add('show-wallpaper');
	});

	wallpaperClose.addEventListener('click',function(){
		document.body.style.overflow = "auto";
		wallpaperMask.classList.remove('show-wallpaper');
	});



	
}




