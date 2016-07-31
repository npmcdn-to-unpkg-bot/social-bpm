var banner_version = 1.01;

//Uncomment for server set-up
var SSO_BASE_URL = "http://env@@@/";
var DATA_SERVER_URL = "http://198.143.103.237/";

var BANNER_CONTEXT_ROOT = "banner-widget/";
var BANNER_KSAPI_CONTEXT_ROOT = "ksapi/";


var BANNER_GET_USER_DETAILS_URL = SSO_BASE_URL + BANNER_KSAPI_CONTEXT_ROOT + 'person/current_user?callback=JSON_CALLBACK';

//document.write('<!--[if lt IE 9]>');
document.write('<!--[if IE]>');
document.write('<script src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/vendor/html5shiv/html5shiv.js"></script>');
// Internet Explorer 8 requires the use of Respond.js to enable media query support.
document.write('<script src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/vendor/respond/respond.min.js"></script>');
document.write('<![endif]-->');

document.write('<link href="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + '/client/src/css/ns.bootstrap.3.0.2.min.css?version=' + banner_version + '" rel="styleSheet" type="text/css" media="screen"></link>');
//custom mck header with responsive styles
document.write('<link href="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/src/css/responsive.banner.widget.min.css?version=' + banner_version + '" rel="styleSheet" type="text/css" media="screen"></link>');
document.write('<script type="text/javascript" src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/vendor/jquery/jquery-1.7.1.min.js?version=' + banner_version + '" type="text/javascript"></script>');
document.write('<script type="text/javascript" src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/vendor/jqueryui/jquery-ui.1-8-17.min.js?version=' + banner_version + '" type="text/javascript"></script>');
document.write('<script type="text/javascript" src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/vendor/bootstrap/legacy/bootstrap-collapse.js?version=' + banner_version + '" type="text/javascript"></script>');
document.write('<script type="text/javascript" src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/vendor/angular/v1.2.16/angular.js?version=' + banner_version + '" type="text/javascript"></script>');
document.write('<script type="text/javascript" src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/vendor/modernizr/modernizr.custom.39753.js?version=' + banner_version + '" type="text/javascript"></script>');
document.write('<script type="text/javascript" src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/src/app/main.js?version=' + banner_version + '" type="text/javascript"></script>');
document.write('<script type="text/javascript" src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/src/app/common/directives/new-banner.js?version=' + banner_version + '" type="text/javascript"></script>');
document.write('<script type="text/javascript" src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/src/app/common/directives/new-banner-autosuggest.js?version=' + banner_version + '" type="text/javascript"></script>');
document.write('<script type="text/javascript" src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/src/app/services/banner-service.js?version=' + banner_version + '" type="text/javascript"></script>');
document.write('<script type="text/javascript" src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/src/app/services/autosuggest-service.js?version=' + banner_version + '" type="text/javascript"></script>');
document.write('<script type="text/javascript" src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/src/app/controllers/search-controller.js?version=' + banner_version + '" type="text/javascript"></script>');

// here we're cleaning angular reference
// var angular = (window.angular = {});
// window.angular = null;

function loadBannerForAngularApps(filterType) {
	document.write('<div>');
	document.write('	<social-bpm filter-type="' + filterType + '"></social-bpm>');
	document.write('</div>');
}
