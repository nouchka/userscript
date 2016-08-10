// ==UserScript==
// @name         Facebook styling
// @namespace    http://www.katagena.com/
// @version      0.6
// @description  no right column, fixed japan background
// @author       Jean-Avit Promis
// @match        https://www.facebook.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle("body{background-image: url('//img0.mxstatic.com/wallpapers/b6b285d9b8411ab3d12e5bd0b139fdd9_large.jpeg') !important;background-attachment: fixed !important;}#contentCol{width: 502px;}#rightCol{display:none;}.countValue{display: none;}");
})();
