// ==UserScript==
// @name         Facebook styling
// @namespace    http://www.katagena.com/
// @version      0.12
// @description  no right column, fixed japan background
// @author       Jean-Avit Promis
// @match        https://m.facebook.com/*
// @match        https://www.facebook.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle("body{background-image: url('//www.katagena.com/wallpaper.jpg') !important;background-attachment: fixed !important;}");
    var metas = document.getElementsByTagName('meta');
    var page_id = metas[4].getAttribute("content");
    console.log(page_id);
    var matches = page_id.match(/\d+/g);
    var script = document.createElement('link');
    script.rel = 'alternate';
    script.type = 'application/rss+xml';
    script.href = 'https://wallflux.com/feed/'+matches[0];
    document.getElementsByTagName('head')[0].appendChild(script);
})();
