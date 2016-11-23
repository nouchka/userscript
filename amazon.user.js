// ==UserScript==
// @name         Amazon price sum
// @namespace    http://www.amazon.fr/
// @version      1.1
// @description  Cost of wishlist
// @author       Jean-Avit Promis
// @match        https://www.amazon.fr/gp/registry/wishlist/*
// @grant        none
// ==/UserScript==

function addJQuery(callback) {
	console.log("stylish addJQuery");
    var script = document.createElement("script");
    script.setAttribute("src", "//code.jquery.com/jquery-1.8.0.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

// the guts of this userscript
function main() {
	jQ(document).ready(function(){
        var $buys = jQ('span.a-color-price.a-size-base');
        var priorities = {5:0,4:0,3:0,2:0,1:0};
        var all_cost = 0;
        $buys.each(function() {
            cost = parseFloat(jQ.trim(jQ(this).html().replace(/[^0-9\,]/g, '')));
            if (!isNaN(cost)) {
                var priority = parseInt(jQ.trim(jQ('span#itemPriority_'+jQ(this).attr('id').substr(10)).html()));
                switch (priority) {
                    case 1:
                        day = "2";
                        break;
                    case 2:
                        day = "1";
                        break;
                    case -1:
                        day = "4";
                        break;
                    case -2:
                        day = "5";
                        break;
                    default:
                        day = "3";
                }
                priorities[day] = priorities[day] + cost;
                all_cost = all_cost + cost;
            }
        });
        console.log(all_cost);
        console.log(priorities);
	});
}

addJQuery(main);
