// ==UserScript==
// @namespace    https://github.com/nouchka/userscript
// @version      1.1
// @author       nouchka
// @name         Enlarge pvpoke
// @run-at       document-end
// @include      https://pvpoke.com/*
// @include      https://www.pvpoke.com/*
// @require      http://code.jquery.com/jquery-2.1.0.min.js
// @grant        none
// ==/UserScript==

$(function(){
    $("#main").css('max-width', '1450px');
});
