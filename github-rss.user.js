// ==UserScript==
// @name         GitHub releases feed
// @namespace    https://github.com/nouchka/userscript
// @version      0.1
// @description  Add Atom feed link for releases on top on project page
// @author       Jean-Avit Promis
// @match        https://github.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';


var repo = document.getElementsByClassName('repohead');
var parts = window.location.pathname.split( '/' );
var actions = document.getElementsByClassName('pagehead-actions');

if (parts.length > 2 && repo.length == 1 && actions.length == 1) {

    var newAction = document.createElement('a');

    var divIdName = 'rss-feed';

    newAction.setAttribute('id',divIdName);
    newAction.setAttribute('href', '/'+parts[1]+'/'+parts[2]+'/releases.atom');
    newAction.setAttribute('class','btn btn-sm');

    newAction.innerHTML = '<span aria-hidden="true" class="octicon octicon-rss"></span>  Releases';

    var newActionLi = document.createElement('li');
    newActionLi.appendChild(newAction);

    actions[0].appendChild(newActionLi);
}
