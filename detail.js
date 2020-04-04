// $(document).on('TxPlayerJSBrageReady', function(){
//     console.log ( 'TxPlayerJSBrageReady') ;
//     // initVideo();
// }) ;

$(document).ready(function(){

    // 点赞
    function like(id){
        return $.ajax({
            url: '/articles/like',
            type: 'POST',
            data: {
                id: id,              // 可选，文章ID
                __CSRF__: G_csrf
            }
        });
    }
    /**
     * like-btn handler
     */
    var likeBtn_0 = document.getElementById('js-like-0');
    var likeBtn_1 = document.getElementById('js-like-1');
    likeBtn_0.addEventListener('click', likeHandler, false);
    likeBtn_1.addEventListener('click', likeHandler, false);
    var likeTxt = document.querySelector('.js-like-text');
    var bottomLikeTxt = document.querySelector('.bottom-like-text');
    function likeHandler(event){
        var me = $(this),
            id = me.data('id');
            like(id).then(function(json){
                if(json.errno == 0){
                    var data = json.data;
                    likeTxt.textContent = data.likes;
                    bottomLikeTxt.textContent = data.likes;
                    // if(me.hasClass('js-liked')){
                    //     me.removeClass('js-liked');
                    // }else{
                    //     me.addClass('js-liked');
                    // }

                    $(likeBtn_0).toggleClass('js-liked');
                    $(likeBtn_1).toggleClass('js-liked');
                }
            })
    }

    /**
     * share handler
     */
     $('.js-share').mouseenter(function(){
        $(this).removeClass('hideicon').addClass('showicon');
        $('.share_icons').show();
     });

     $('.js-share').mouseleave(function(){
        $(this).removeClass('showicon').addClass('hideicon');
        $('.share_icons').hide();
     });

     /**
      * share link function
      */
    $(".share_fb").on("click", function() {
		FB.ui({
			method: 'share',
			href: window.location.href,
		}, function(response){
			console.log ( 'share response') ;
			console.log ( response) ;
		});
	}) ;
    // 初始化分享
    function initShare() {
        var url  = encodeURIComponent(location.href);
        var keys = ['title', 'desc', 'pic', 'url'];

        var shares = $('.js-share-list');
        var html = shares.html();

        for(var p in keys){
            var key = keys[p];
            var val = shares.data(key);
            var reg = new RegExp('{' + key + '}', 'g');
            if(key == 'url'){
                val = url;
            }
            if(key == 'pic'){
                val = document.querySelector('.js-pic-banner').src; // 目前取的 banner 图片 TODO 需要取正方形的那张
            }
            html = html.replace(reg, val);
        };
        shares.html(html);

        shares.find('li').click(function(){
            var el = $(this), href = el.data('href');
            if ( href) window.open(href);
        }) ;
    }

    initShare();
    
    /* 初始化 _public_pic 的padding-top */
    function initPublicPic() {

        var pubPics = $('._public_pic');

        pubPics.each(function(index){

            var paddingTop = pubPics[index].getAttribute('data-paddingtop');

            pubPics[index].style.paddingTop = paddingTop

        });
    }

    initPublicPic();

    /* 视频播放控制 START */

    window.players = {};

    function initVideo(){
        
        var width = (mobile)?320:800 ;
        var height = (mobile)?180:460 ;

        // var videos = 
        $('._public_video').forEach ((el , idx) => {
            // console.log ( el) ;
            var innerDiv = el.querySelector('.js-video-player');
            // console.log ( innerDiv) ;
            var containerId = innerDiv.getAttribute('data-id') ;
            var vid = innerDiv.getAttribute('data-vid') ;
            window.log = Txplayer.util.showInfo.bind(Txplayer.util)
            console.log ( "%s: %s", containerId, vid) ;

            // var config = {
            //     containerId: innerDiv.getAttribute('data-id'),
            //     vid: vid,
            //     width: width,
            //     height: height,

            //     autoplay: false,
            //     playerType: 'h5',

            //     showLoopPlay: true
            // } ;

            var config = {
                containerId: containerId,
                vid: vid,
                width: width,
                height: height,
                // playerType: 'html5hd',
                autoplay: false,
                hideControlOnPlaying: true,
                extendPluginsMap:{
                    vod: {
                        flash: ['Barrage'],
                        html5hd: ['Barrage'],
                        coolOpen:['Barrage']
                    }
                },
                extendSettings: {
                    Barrage: {
                        globalConfig: {
                            useDefaultCss: true,
                            hideHotBullet: true
                        }
                    }
                }
                // playerType: 'diy',
                // width: '100%',
                // height: screen.availHeight/3,
                // useSVG: true,
                // pluginsMap: {
                //     vod: {
                //         diy: [ 'HtmlFrame', 'HdPlayer', 'HdPlayerControl', 'UiPoster', 'UiPlay' ]
                //     }
                // }
                

            }

            var player = new Txplayer(config) ;
            players[innerDiv.getAttribute('data-vid')] = player ;


        }) ;
        

    }

    
    initVideo() ;

    $('.js-video-player').click( function(evt) {
        
        // console.log ( 'click') ;
        // console.log ( $(this)) ;

        if( $(this).hasClass('video-pseudo-item') ){
            $(this).removeClass('video-pseudo-item');
        }

        var videoIndex = $(this).data('videoindex');
        var vid = $(this).data('vid');
        // console.log ( vid) ;
        
        // console.log ( players) ;
        // console.log ( players[vid]) ;
        players[vid].play({vid: vid}) ;

    });

    /* 视频播放控制 END */


    /* 动态更新详情页banner图片 */
    window.addEventListener('resize', updateImgSrc, false);

    var bannerItem = document.querySelectorAll('.js-pic-banner')[0];

    function updateImgSrc() {

        var id = bannerItem.getAttribute('data-article-id'),
            src = bannerItem.getAttribute('data-banner-src');

        if ( getDocumentWidth() < 440 ) {
            
            bannerItem.src = 'https://cdn-isux.qq.com/upload/covers/'+id+'_a_src.jpg';
        
        } else {

            bannerItem.src = src;
        }

    }

    updateImgSrc();

    function getDocumentWidth(){
        return document.documentElement.clientWidth;
    };


    /* initial slide-animation*/
    if(window.mobile){
        
        //详情页测试首页广告轮播
        /* new SlideAnimation({
            listId: 'testlist',
            listItem: '.test-item',
            maxIndex: 5,
            listLength: 6,
            autoplay: false,
        }); */

        //文章详情页推荐模块的轮播
        new SlideAnimation({
            listId: 'list',
            listItem: '.related-item',
            isScale: true,
            scale: 0.8,
            scaleSmall: 'scale3d(.9, .9, 1)',
            defaultIndex: 1,
            maxIndex: 4,
            listLength: 5,
            autoplay: false
        });

    }else{
        //PC端详情页测试首页广告轮播
        /*new SlideAnimation({
            listId: 'testlist',
            listItem: '.test-item',
            defaultIndex: 1,
            maxIndex: 5,
            listLength: 6
        });*/
    }


    scrollToolbar();

});


function scrollToolbar(){

    var targetScroll;

    $('._mod_stat').on('animationend',function(e){
        // console.log(e);

        if (e.animationName === 'showup') {

            targetScroll = parseInt($('._article_date').offset().top + $('._article_date').height());
        }
    });


    var windowHeight = parseInt($(window).height());
    var lastScrollHeight = 0;

    $(window).scroll(function(e){
        
        var currentScroll = $(window).scrollTop();
        // console.log(targetScroll);

        if (currentScroll + windowHeight > targetScroll) {
            // console.log('hide');
            $('.share_article_scroll').addClass('share_article_hide');
            return;

        }else{
            // console.log('show');
            
            if (currentScroll > lastScrollHeight) {
                // console.log('down');

                $('.share_article_scroll').addClass('share_article_hide');

            }else{
                // console.log('top');

                $('.share_article_scroll').removeClass('share_article_hide');

            }

            lastScrollHeight = currentScroll;

        }

    })

}


/* ip判断 */
(function ($) {

    var err = function err() {  
    };
	function checkip(country, province){
        /* 为中国，香港，台湾的话，全部都显示 */
		if(province == '\u53f0\u6e7e' || country == '\u53f0\u6e7e' || province == '\u9999\u6e2f' || country == '\u9999\u6e2f' || country == '\u4e2d\u56fd' || country == '\u5185\u7f51\u0049\u0050' ){
        }else{
            /* 国外则只显示fb和tw */
            // $('.js-china-ip').hide();
        }
	}
    
    /* taobao */
    // $.ajax({
    //     url: '/ip/',
    //     data:{
    //         '__CSRF__': G_csrf,
    //     },
    //     success: function success(rsp) {

    //         if (rsp.code == 0) {
    //              checkip(rsp.data.country);
    //         } else {
    //             err();
    //         }
    //     },
    //     error: err,
    //     timeout: err
    // });

    /* sina */
	/* $.ajax({
       url: '/ip/checkip/',
       success: function success(rsp) {
		   if (rsp.ret == 1) {
			   checkip(rsp.country, rsp.province);
			} else {
				err();
			}
		},
		error: err,
		timeout: err
    }); */


})(window.jQuery || window.Zepto);