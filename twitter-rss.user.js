// ==UserScript==
// @name         Twitter RSS feed
// @namespace    https://github.com/nouchka/userscript
// @version      0.1
// @description  Twitter RSS feed
// @author       Jean-Avit Promis
// @match        https://twitter.com/*
// @require      http://code.jquery.com/jquery-2.1.0.min.js
// @grant        none
// ==/UserScript==

$(function(){
    var parts = window.location.pathname.split( '/' );
    $("head").append('<link rel="alternate" type="application/rss+xml" title="Instagram RSS" href="https://twitrss.me/twitter_user_to_rss/?user=' + parts[1] + '"/>');
});