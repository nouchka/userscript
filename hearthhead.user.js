// ==UserScript==
// @name         Hearthhead
// @namespace    http://www.hearthhead.com/
// @version      1.1
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
var price = {q1:0,q2:0,q3:100,q4:400,q5:1600};
var goldTotal = 0;
var goldTotalUnique = 0;
var normalCard = 0;
var normalCardUnique = 0;
var totalCardUnique = {};
var allTotalCardUnique = {};
var incomplete = 0;
var missing = 0;
var card = null;
var ggt = null;
var normal = 0;
var gold = 0;
var link = null;
var tab = null;
var tabName = null;
var extension = null;
var dust = 0;
var dustLegend = 0;
var ogods = {q1:0,q2:0,q3:0,q4:0,q5:0};
var classic = {q1:0,q2:0,q3:0,q4:0,q5:0};
var need = 0;

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
        } else if (tabName == '21'){
            extension = 'ogods';
        } else {
            extension = 'all';
        }
    }else{
        extension = 'all';
    }
    if( allTotalCardUnique[extension] === undefined ) {
        allTotalCardUnique[extension] = 0;
    }
    if( totalCardUnique[extension] === undefined ) {
        totalCardUnique[extension] = 0;
    }
    if( totalCardUnique['all'] === undefined ) {
    	totalCardUnique['all'] = 0;
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
    if (extension == 'classic' || extension == 'ogods') {
        if (link[0].getAttribute("class") == 'q5') {
            need = (1-normal);
        } else {
            need = (2-normal);
        }
        if (extension == 'classic') {
            classic[link[0].getAttribute("class")] += need;
        } else {
            ogods[link[0].getAttribute("class")] += need;
        }
        if (link[0].getAttribute("class") == 'q5') {
            dustLegend += (1-normal)*price[link[0].getAttribute("class")];
        } else {
            dust += (2-normal)*price[link[0].getAttribute("class")];
        }
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
console.log(dust);
console.log(dustLegend);
console.log('classic');
console.log(classic);
console.log('ogods');
console.log(ogods);
