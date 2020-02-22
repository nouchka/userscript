// ==UserScript==
// @namespace    https://github.com/nouchka/userscript
// @version      1.2
// @author       nouchka
// @name         Only specific quest
// @description  only show specific quest
// @match        https://nycpokemap.com/quest.html
// @match        https://sgpokemap.com/quest.html
// @match        https://vanpokemap.com/quest.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var questShow = function () {
        if (typeof quests === 'undefined' || typeof markers === 'undefined'){
            return;
        }
        var counter=0;
        for (var i = 0; i < quests.length; ++i) {
            var currentQuest = quests[i];
            var marker = markers[i];
            if (!currentQuest.conditions_string.startsWith("Hatch") && !currentQuest.conditions_string.startsWith("Make 3 Great")) {
                counter = counter + 1;
                //console.log(currentQuest.conditions_string);
                //$(marker._icon).find('div.pokemon_icon').css('background-color', 'red');
                //console.log($(marker._icon).find('div.pokemon_icon'));
                if (typeof marker !== 'undefined') {
                    $(marker._icon).find('div.pokemon_icon').addClass('ggt');
                }
            }
            if (currentQuest.rewards_string == '3 Rare Candies') {
                if (typeof marker !== 'undefined') {
                    $(marker._icon).find('div.pokemon_icon').css("background-color", "red");
                }
            }
        };
        $('div.pokemon_icon').not('.ggt').hide();
    };
    $('#close_donation_button a').bind('click', function() {
        $("#topbar").append("<a href='#' id='ggt'>Filter</a>");
        $("#topbar").append("<a href='/quest.html' id='back'>no-Filter</a>");
        $("#ggt").on('click', function (e) {
            questShow();
        });
        questShow();
        map.on('layeradd ', function (e) {
            setTimeout(function(){ questShow(); }, 1000);
            console.log('event');
        });
    });
})();
