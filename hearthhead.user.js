// ==UserScript==
// @name         Hearthhead
// @namespace    http://www.hearthhead.com/
// @version      0.1
// @description  Counts missing cards
// @author       Jean-Avit Promis
// @match        http://*.hearthhead.com/collection
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

var cards = document.getElementsByClassName('cardline');
var type = {q1:0,q2:0,q3:0,q4:0,q5:0};
var allType = {q1:0,q2:0,q3:0,q4:0,q5:0};
var goldTotal = 0;
var goldTotalUnique = 0;
var normalCard = 0;
var normalCardUnique = 0;
var totalCardUnique = {classic:0,naxx:0,go:0,blackrock:0,grand:0,explorer:0,all:0};
var allTotalCardUnique = {classic:0,naxx:0,go:0,blackrock:0,grand:0,explorer:0,all:0};
var incomplete = 0;
var missing = 0;
var card = null;
var ggt = null;
var normal = 0;
var gold = 0;
var link = null
var tab = null;
var tabName = null;
var extension = null;

for (var i = 0; i < cards.length; i++) {
    card = cards[i];
    tab = findAncestor(card, 'tabbed-contents');
    if(tab){
        tabName = tab.getAttribute("id").substring(4, 6);
        if (tabName == '3.'){
            extension = 'classic';
        } else if (tabName == '12'){
            extension = 'naxx';
        } else if (tabName == '13'){
            extension = 'go';
        } else if (tabName == '14'){
            extension = 'blackrock';
        } else if (tabName == '15'){
            extension = 'grand';
        } else if (tabName == '20'){
            extension = 'explorer';
        } else {
            extension = 'all';
        }
    }else{
        extension = 'all';
    }
    allTotalCardUnique[extension] += 1;
    ggt = card.getElementsByClassName('buttons');
    link = card.getElementsByTagName('a');
    allType[link[0].getAttribute("class")] += 1;
    normal = parseInt(ggt[0].getElementsByClassName('in')[0].getAttribute("cardcount"));
    gold = parseInt(ggt[1].getElementsByClassName('in')[0].getAttribute("cardcount"));
    goldTotal = goldTotal + gold;
    if (gold > 0){
        goldTotalUnique += 1;
    }
    normalCard = normalCard + normal;
    if (normal > 0) {
        normalCardUnique += 1;
    }
    if((normal+gold) > 0){
        totalCardUnique[extension] += 1;
        totalCardUnique['all'] += 1;
        type[link[0].getAttribute("class")] += 1;
    }
    if ((normal+gold) < 2) {
        if ((normal+gold) === 0) {
            missing += 1;
        }
        incomplete += 1;
    }
}
console.log('Missing: '+missing);
console.log('Incomplete: '+incomplete);
console.log('Gold: '+goldTotal);
console.log('Gold unique: '+goldTotalUnique);
console.log('Normal: '+normalCard);
console.log('Normal unique: '+normalCardUnique);
console.log('Repartition:')
console.log(totalCardUnique);
console.log(allTotalCardUnique);
console.log('Total: '+totalCardUnique['all']);
console.log('Total availa: '+cards.length);
console.log(type);
console.log(allType);
