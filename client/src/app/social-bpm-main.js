var socialBpmAngular = window.angular;
var socialBpmWidget = socialBpmAngular.module('socialBpmWidgetApp', ['social-bpm-app']);
socialBpmAngular.element(document).ready(function () {
  socialBpmAngular.bootstrap(document.getElementById('social-bpm-app'), ['socialBpmWidgetApp']);
});