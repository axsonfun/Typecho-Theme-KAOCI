/*
 * backgroundCheck - jQuery plugin - Automatically switch to a darker or a lighter version of an element depending on the brightness of images behind it.
 *
 * Copyright (c) 2017
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version:  1.0.0
 * Author by Xiaogezi
 * 
 */
var backgroundCheck = {
    debug: /debugger;/g.test(location.href), // 调试模式开关
    options: {},
    defaults: {           // 默认参数
        targets: '.title',  // 文本所在容器
        imgs: '.bg',        // 图片或背景所在容器
        parents: null,      // 添加 cssclass 的容器，默认为 null
        cssclass: 'light',// 暗色背景下要添加的 class
        darkclass: 'dark-to-light',  // 浅色背景下要添加的 class
        lazy: true          // 默认自动响应 $.lazyload 的 appeared 事件。设置为 false 时，自动触发 appeared 事件
    },
    log: function () {    // 输出日志
        this.debug && window.console && console.log.apply && console.log.apply(console, arguments);
    },
    /** 获取高分辨率屏信息
     * 
     */
    getRatio: function () { 
        var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');
        var devicePixelRatio = window.devicePixelRatio || 1;
        var backingStorePixelRatio = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;
        var ratio = devicePixelRatio / backingStorePixelRatio;
        this.ratio = ratio;
        this.devicePixelRatio = devicePixelRatio;
        this.backingStorePixelRatio = backingStorePixelRatio;

        this.log('ratio: ', ratio, 'devicePixelRatio: ', devicePixelRatio, 'backingStorePixelRatio: ', backingStorePixelRatio);
        canvas = ctx = null;
    },
    /** 应用高清屏方案
     * @param {Canvas} canvas
     * @param {Context} ctx
     */
    hidpiPolyfill: function (canvas, ctx) { // via canvas-retina http://happycoder.net/sites/default/files/demo/canvas-retina/test.html
        var isPoly = canvas.getAttribute('data-ratio');
        if (isPoly != 'true') {
            var devicePixelRatio = this.devicePixelRatio || 1;
            var backingStorePixelRatio = this.backingStorePixelRatio;
            var ratio = this.ratio;

            if (devicePixelRatio !== backingStorePixelRatio) {
                var oldWidth = canvas.width;
                var oldHeight = canvas.height;

                canvas.width = oldWidth * ratio;
                canvas.height = oldHeight * ratio;

                canvas.style.width = oldWidth + 'px';
                canvas.style.height = oldHeight + 'px';

                ctx.scale(ratio, ratio);
            }
            canvas.setAttribute('data-ratio', 'true');
        }
    },
    /** 检查图片 offset 区域是否深色，执行 callback 回调
     * 
     * img      {Image}    图片节点
     * offset   {Object}   待检测区域 {left, top, width, height}
     * callback {Function} 回调
     * $ele     {$}        待添加 class 的元素 $ 包装
     */
    isDark: function (img, offset, callback, $ele, cssclass) {

        this.debug && console.time(img.src);

        var fuzzy = 0.1;

        var canvas = document.createElement('canvas');
        var w = offset.width || img.width,
            h = offset.height || img.height;

        var l = offset.left || 0,
            t = offset.top || 0;

        canvas.width = w;
        canvas.height = h;

        var ctx = canvas.getContext('2d');
        this.hidpiPolyfill(canvas, ctx);
        ctx.drawImage(img, l, t, w, h, 0, 0, w, h);
        this.log('[drawImage](sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight)', l, t, w, h, 0, 0, w, h);

        var imageData = ctx.getImageData(0, 0, w, h);

        var data = imageData.data;
        var r, g, b, maxRGB, light = 0, dark = 0;

        for (var x = 0, len = data.length; x < len; x += 4) {
            r = data[x];
            g = data[x + 1];
            b = data[x + 2];

            maxRGB = Math.max(Math.max(r, g), b);
            maxRGB < 128 ? dark++ : light++;
        }
        this.log('dark:', dark, ' light: ', light);
        var diff = ((light - dark) / (w * h));
        if (this.debug) {
            document.body.appendChild(canvas);
            console.timeEnd(img.src);
        }
        canvas = ctx = null;
        $ele.data('offset', JSON.stringify(offset));
        callback && callback.call(this, diff + fuzzy < 0, $ele, cssclass);
    },
    /** 添加 class
     * 
     *  bool {Boolean} true 时添加
     *  $ele {$}       待添加 class 的元素 $ 包装
     */
    setClass: function (bool, $ele, cssclass) {
        var me = this;
        me.log('[isDark]', bool);
        var item = me.options.parents ? $ele.parents(me.options.parents) : $ele;    // 未设置父级时
        if (bool) {
            item.addClass(cssclass || me.options.cssclass);
        }

        if (!(me.options.parents && item.data('bgChecked'))) {    // 没有父容器的情况
            item.one('mouseover', function (e) {
                var $eo = $(this);
                var $imgs = $eo.find('.lazy');
                if ($imgs.length > 1) {
                    var offset = $imgs.data('offset');
                    me.check($imgs[1], offset, !item.hasClass(me.options.cssclass) ? me.options.darkclass : me.options.cssclass);
                }
            })
            item.data('bgChecked', 1);
        }
    },
    /** 检查元素是否深色，添加 cssclass
     * @param {Element} ele
     * @param {Object} offset
     * @param {String} cssclass
     */
    check: function (ele, offset, cssclass) {

        var me = this;
        var $ele = $(ele);

        if (!$ele.is('img')) {    // 非图片取背景图片
            me.log('[isImg]', false);
            var src = $ele.css('background-image').split('"')[1];
            ele = new Image();
            ele.onload = function () {
                me.isDark(ele, offset, me.setClass, $ele, cssclass);
            };
            ele.src = src;
        } else {
            ele.crossorigin = "anonymous";

            if(ele.complete){
                me.isDark(ele, offset, me.setClass, $ele, cssclass);
            }else{
                ele.onload = function(){
                    /* console.log('imgLoaded'); */
                    me.isDark(ele, offset, me.setClass, $ele, cssclass);
                }

            }
        }
    },
    events: function () {
        var me = this;
        var $imgs = $(me.options.imgs);

        // 绑定 lazyload 的 appeared 事件
        $imgs.on('appeared', function (e) {
            var img = e.target;
            var link = img.parentElement;
            var node = me.options.parents ? link.querySelector(me.options.targets) : img;

            me.log('[appeared]', img);

            if (node) {
                var imgBound = img.getBoundingClientRect(),
                    nodeBound = node.getBoundingClientRect(),
                    offsetLeft = nodeBound.left - imgBound.left,
                    offsetTop = nodeBound.top - imgBound.top;
                me.check(img, { width: node.clientWidth, height: node.clientHeight, left: offsetLeft, top: offsetTop });
            }
        })

        // 设置为 false 时，自动触发 appeared 事件
        if (!me.options.lazy) {
            $imgs.trigger('appeared');
        }
    },
    init: function (options) {
        this.getRatio();
        $.extend(this.options, this.defaults, options);
        this.events();
    }
};