// ==UserScript==
// @name         Amazon link to camel
// @namespace    http://www.amazon.fr/
// @version      1.2
// @description  Link to camel website
// @author       Jean-Avit Promis
// @match        https://www.amazon.fr/*
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
		if (jQ('input#add-to-cart-button').length ) {
			console.log("Add Camel link");
			jQ('tr#vatMessage span').append(' <a href="https://fr.camelcamelcamel.com/search?sq=https%3A%2F%2Fwww.amazon.fr%2F'+window.location.pathname+'" target="_blank">Camel</a>');
		}
	});
}

addJQuery(main);
