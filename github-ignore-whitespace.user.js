// ==UserScript==
// @name        Ignore whitespace button
// @namespace   github-ignore-whitespace
// @description Adds a button to github diff views to toggle the "ignore whitespace" option.
// @include     https://github.com/*
// @version     1
// @grant       none
// ==/UserScript==
function main() {
  $("#toc > .btn-group").prepend('<a class="btn btn-sm" href="?w=1">Ignore whitespace</a>');
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
    main();
  }
});
