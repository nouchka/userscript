// ==UserScript==
// @name         Facebook styling
// @namespace    http://www.katagena.com/
// @version      0.10
// @description  no right column, fixed japan background
// @author       Jean-Avit Promis
// @match        https://www.facebook.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle("body{background-image: url('//www.katagena.com/wallpaper.jpg') !important;background-attachment: fixed !important;}#contentCol{width: 502px;}#rightCol{display:none;}.countValue{display: none !important;}");
})();
