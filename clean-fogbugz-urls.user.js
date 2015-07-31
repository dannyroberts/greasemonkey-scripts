// ==UserScript==
// @name         Clean FogBugz URLs
// @version      0.2
// @description  Replaces http://manage.dimagi.com/default.asp?123456#1984701 with http://manage.dimagi.com/default.asp?123456
// @author       Danny Roberts
// @match        http://manage.dimagi.com/default.asp*
// @grant        none
// ==/UserScript==

function cleanURL() {
    if (!document.getElementById('bugerror') &&
        (/http:\/\/manage.dimagi.com\/default.asp\?\d+#\d+/.exec(window.location.href))) {
        history.replaceState("", document.title, window.location.pathname + window.location.search);
    }
};

window.onhashchange = function () {
    cleanURL()
};

cleanURL();
