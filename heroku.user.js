// ==UserScript==
// @name         Heroku Free Dyno Usage
// @namespace    https://www.heroku.com/
// @version      1.1
// @description  % of the month
// @author       Jean-Avit Promis
// @match        https://dashboard.heroku.com/account/billing
// @grant        none
// ==/UserScript==

var today = new Date();
// no good but it keeps the people going
var first = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0, 0);
var last = new Date(today.getFullYear(), today.getMonth(), 31, 0, 0, 0, 0);
var diff_first = Math.abs((today.getTime() - first.getTime())/ 1000);
var diff_last = Math.abs((last.getTime() - today.getTime())/ 1000);
var procent = Math.abs(diff_first * 100 /(diff_first + diff_last));
alert(procent);
