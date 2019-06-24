// ==UserScript==
// @namespace    https://github.com/nouchka/userscript
// @version      1.2
// @author       nouchka
// @name         Only high level
// @description  only show high level
// @match        https://nycpokemap.com/index.html
// @match        https://sgpokemap.com/index.html
// @require      https://cdnjs.cloudflare.com/ajax/libs/favico.js/0.3.10/favico.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var favicon=new Favico({
        animation:'pop'
    });
    var highLevelPokemon = function () {
        if (typeof pokemons === 'undefined' || typeof markers === 'undefined'){
            return;
        }
        console.log('high level');
        var counter=0;
        for (var i = 0; i < pokemons.length; ++i) {
            var currentPokemon = pokemons[i];
            var marker = markers[i];
            if (currentPokemon.level > 30) {
                counter = counter + 1;
                console.log(currentPokemon.level + ' ' + currentPokemon.id);
                //$(marker._icon).find('div.pokemon_icon').css('background-color', 'red');
                //console.log($(marker._icon).find('div.pokemon_icon'));
                if (typeof marker !== 'undefined') {
                    $(marker._icon).find('div.pokemon_icon').addClass('ggt');
                }
            }
        };
        $('div.pokemon_icon').not('.ggt').hide();
        favicon.badge(counter);
    };
    $('#close_donation_button a').bind('click', function() {
        $("#topbar").append("<a href='#' id='ggt'>Filter</a>");
        $("#topbar").append("<a href='/' id='back'>no-Filter</a>");
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
