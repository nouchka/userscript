// ==UserScript==
// @namespace    https://github.com/nouchka/userscript
// @version      1.1
// @author       nouchka
// @name         Only high level
// @description  only show high level
// @match        https://nycpokemap.com/index.html
// @match        https://sgpokemap.com/index.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var highLevelPokemon = function () {
        if (typeof pokemons === 'undefined' || typeof markers === 'undefined'){
            return;
        }
        console.log('high level');
        for (var i = 0; i < pokemons.length; ++i) {
            var currentPokemon = pokemons[i];
            var marker = markers[i];
            if (currentPokemon.level > 30) {
                console.log(currentPokemon.level + ' ' + currentPokemon.id);
                //$(marker._icon).find('div.pokemon_icon').css('background-color', 'red');
                //console.log($(marker._icon).find('div.pokemon_icon'));
                if (typeof marker !== 'undefined') {
                    $(marker._icon).find('div.pokemon_icon').addClass('ggt');
                }
            }
        };
        $('div.pokemon_icon').not('.ggt').hide();
    };
    $('#close_donation_button a').bind('click', function() {
        $("#topbar").append("<a href='#' id='ggt'>Filter</a>");
        $("#ggt").on('click', function (e) {
            highLevelPokemon();
        });
        highLevelPokemon();
        map.on('layeradd ', function (e) {
            //highLevelPokemon();
            setTimeout(function(){ highLevelPokemon(); }, 1000);
            console.log('event');
        });
    });
})();
