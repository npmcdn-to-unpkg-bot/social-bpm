// namespacing angularjs for social bpm widget
var socialBpmAngular = window.angular;

//namespacing jQuery for social bpm widget
var socialBpmJQuery = $.noConflict(true);

var socialBpmWidget = socialBpmAngular.module('socialBpmWidgetApp', ['social-bpm-app']);
socialBpmAngular.element(document).ready(function () {
  socialBpmAngular.bootstrap(document.getElementById('social-bpm-app'), ['socialBpmWidgetApp']);
});