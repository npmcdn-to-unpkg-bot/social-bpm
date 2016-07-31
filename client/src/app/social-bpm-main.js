// namespacing banner angular version
var socialBpmAngular = window.angular;

// namespacing banner jQuery version
var jQueryBanner = $.noConflict(true);

console.log("Hello 3");

var socialBpmWidget = socialBpmAngular.module('socialBpmWidgetApp', ['social-bpm-app']);

console.log("Hello 4");

socialBpmAngular.element(document).ready(function () {
  console.log("Hello 5");
  socialBpmAngular.bootstrap(document.getElementById('social-bpm-app'), ['socialBpmWidgetApp']);
  console.log("Hello 6");
});