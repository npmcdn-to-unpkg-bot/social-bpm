// namespacing banner angular version
var angularSocialBpm = window.angular;
// namespacing banner jQuery version
var jQueryBanner = $.noConflict(true);
var bannerWidget = angularBanner.module('bannerWidgetApp', ['angular-banner-app', 'new-banner-autosuggest']);
angularSocialBpm.element(document).ready(function() {
  angularSocialBpm.bootstrap(document.getElementById('banner-widget-app'), ['bannerWidgetApp']);
});