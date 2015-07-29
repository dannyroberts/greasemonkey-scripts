// ==UserScript==
// @name        Ignore whitespace button
// @namespace   github-ignore-whitespace
// @description Adds a button to github diff views to toggle the "ignore whitespace" option.
// @include     https://github.com/*
// @version     1
// @grant       none
// ==/UserScript==
function createButton() {
    if ($("#ignore-whitespace").length == 0) {
        $("#toc > .btn-group").prepend('<a class="btn btn-sm" href="" id="ignore-whitespace"></a>');
    }

    $("#ignore-whitespace").click(updateButton);
    updateButton();
}

function updateButton() {
    var showWhitespace = $.getUrlVar("w");
    if (showWhitespace == 1) {
        $("#ignore-whitespace").attr('href', '?w=0');
        $("#ignore-whitespace").text('Show whitespace');
    } else {
        $("#ignore-whitespace").attr('href', '?w=1');
        $("#ignore-whitespace").text('Ignore whitespace');
    }
}

window.addEventListener('load', function () {
    if (typeof $ === 'undefined') {
        // load jQuery : http://stackoverflow.com/a/4261831/10840
        var script = document.createElement('script');
        script.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js');
        script.addEventListener('load', function () {
            var script = document.createElement('script');
            script.textContent = 'window.jQ=jQuery.noConflict(true);(' + main.toString() + ')();';
            document.body.appendChild(script);
        }, false);
        document.body.appendChild(script);
    } else {
        createButton();
    }
});

$.extend({
    getUrlVars: function(){
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function(name){
        return $.getUrlVars()[name];
    }
});
