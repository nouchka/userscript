// ==UserScript==
// @name         Add RSS from stagram.com
// @namespace    https://github.com/nouchka/userscript
// @version      1.1
// @author       nouchka
// @run-at       document-end
// @include      https://www.instagram.com/*
// @require      http://code.jquery.com/jquery-2.1.0.min.js
// @grant        none
// ==/UserScript==

$(function(){
    //don't care if undefined
    //console.log($($("h1")[0]));
    $("head").append('<link rel="alternate" type="application/rss+xml" title="Instagram RSS" href="http://faas.sdsix.lan/function/func_rssgram/'+$($("h1")[0]).html()+'/"/>');
});
