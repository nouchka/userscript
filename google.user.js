// ==UserScript==
// @name           No Google Search Redirect (Use Jquery)
// @version        1.10
// @author         imt
// @run-at         document-end
// @include        https://www.google.com/search*
// @require        http://code.jquery.com/jquery-2.1.0.min.js
// ==/UserScript== 



function formatSearch(){
    $("#ires a").each(function(){
        $(this).removeAttr("onmousedown");
        var real =$(this).attr("data-href");
        if(real)
            $(this).attr("href",$(this).attr("data-href"));
    });
}
$('#main').on("DOMNodeInserted", function(e) {
    formatSearch();
});
$(function(){
    formatSearch();
});
