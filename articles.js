$(function () {

	var supportLineClamp = typeof document.body.style.webkitLineClamp != 'undefined';
	if (!supportLineClamp) addEllipsis();

	$(window).resize(function () {
		if (!supportLineClamp) throttle(addEllipsis);
		throttle(responsive);
	});
	// dropdown 功能
	var dropdown = {
		dropdowns: null,
		ele : '',
		currentVal : [],
		closeClass: 'dropdown-close',
		events: function () {
			var self = this;
			$(document).click(function (e) {
				self.dropdowns.each(function (index) {
					var me = $(this);
					var pullDown = this.querySelector('.pull-down');

					if (!me.hasClass(self.closeClass)) {
						me.addClass(self.closeClass);
						me.find('.pull-bar').removeClass('active');
						pullDown.beginElement && pullDown.beginElement();

						addDelay(this,true);
					}

					me.find('.dropdown-text').text(self.currentVal[index]);
				});
				
			});
		},
		init: function (selector) {
			var self = this;
			self.ele = selector;
			self.dropdowns = $(selector);

			self.dropdowns.each(function (index) {
				var me = $(this),
					val = me.data('value');
				var _this = this;

				if (me.find('.dropdown-item').length === 0) return;

				var pullUp = this.querySelector('.pull-up');
				var pullDown = this.querySelector('.pull-down');
					
				if (val) {
					
					me.find('.dropdown-item').get(0).classList.remove('dropdown-active');

					var item = me.find('[data-value="' + val + '"');
					item.addClass('dropdown-active');
					// me.find('.dropdown-text').text(item.text());

					self.currentVal.push(item.text());	

				}else if(val === false || val === undefined){
					me.find('.dropdown-item').get(0).classList.add('dropdown-active');		

					self.currentVal.push('ALL');
				}

				me.click(function (e) {

					$(this).toggleClass(self.closeClass);
					me.find('.pull-bar').toggleClass('active');

					if (me.hasClass(self.closeClass)) {

						me.find('.dropdown-text').text(self.currentVal[index]);
						pullDown.beginElement && pullDown.beginElement();
						addDelay(_this,true);

					}else{
						me.find('.dropdown-text').text('PLEASE SELECT');
						pullUp.beginElement && pullUp.beginElement();
						addDelay(_this);
					}

					e.stopPropagation();
				})
			});
			self.events();
		}
	};
	dropdown.init('.js-dropdown');
	responsive();
});

function responsive() {
	var WINDOW_WIDTH = $(document).width();

	if (WINDOW_WIDTH > 700) {
		pcView();
	} else if (WINDOW_WIDTH > 414) {
		padView();
	} else {
		phoneView();
	}
};

function pcView() {
	// addEmptyArticles(3);
	// titleBaseline(3);
};

function padView() {
	// addEmptyArticles(2);
	// titleBaseline(2);
};

function phoneView() {

};

function addDelay(current,isTrue){

	var item = [].slice.call(current.querySelectorAll('.dropdown-item'));
	var len = item.length;

	if (isTrue) {
		item.forEach(function(ele,index){
			ele.style.transitionDelay =  (len - index - 1) * 0.05 + 's';
		});
		return;
	}

	item.forEach(function(ele,index){
		ele.style.transitionDelay = index * 0.05 + 's';
	})

}

// function titleBaseline(column) {

// 	var articleTitle = document.querySelectorAll('.article-list .specific-title');
// 	articleTitle = Array.prototype.slice.call(articleTitle);
// 	articleTitle.shift();
// 	// console.log(articleTitle instanceof Array);
// 	articleTitle.forEach(function (ele, index, array) {

// 		if (parseInt($(ele).css('line-height')) < parseInt($(ele).css('height'))) {

// 			// console.log(index);

// 			var col = parseInt(column);

// 			var times = Math.floor(index / col);

// 			while (col > 0) {
// 				$(array[column * (times + 1) - col]).css('height', $(ele).css('height'));
// 				col--;
// 			}

// 		}
// 	});
// };

function addEllipsis() {

	var articleIntro = document.querySelectorAll('.specific-introduce');
	// console.log(articleIntro.length);
	for (var i = 0; i < articleIntro.length; i++) {

		$clamp(articleIntro[i], { clamp: 2, useNativeClamp: false });

	}
};

function throttle(method, context) {

	clearTimeout(method.tId);

	method.tId = setTimeout(function () {
		method.call(context);
	}, 100);

};


function addEmptyArticles(column) {

	var column = parseInt(column);

	var articleSingle = document.querySelectorAll('.article-single');

	var readyEmpty = (articleSingle.length - 3) % column;

	if (readyEmpty === 0) return;

	$('.empty-article').eq(0).show();

	if (readyEmpty === 1) {
		if (column === 2) return;
		$('.empty-article').eq(1).show();
	}
};

var parentElement = document.querySelector('.article-list');
var emptyItem = document.querySelector('.empty-article');
var normalItem = document.querySelector('.article-single');
var moreBtn = document.querySelector('.js-more');


moreBtn.addEventListener('click', more, false);
