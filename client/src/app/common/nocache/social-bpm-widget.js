var social_bpm_widget_version = 1.01;

var AWS_SERVER_URL = "http://ec2-52-37-118-158.us-west-2.compute.amazonaws.com/";


// document.write('<script type="text/javascript" src="' + SSO_BASE_URL + BANNER_CONTEXT_ROOT + 'client/vendor/angular/v1.2.16/angular.js?version=' + banner_version + '" type="text/javascript"></script>');
document.write('<script type="text/javascript" src="client/vendor/angularjs/v1.5.8/angular.min.js?version=' + social_bpm_widget_version + '"></script>');
document.write('<script type="text/javascript" src="client/src/app/social-bpm-main.js?version=' + social_bpm_widget_version + '"></script>');
document.write('<script type="text/javascript" src="client/src/app/common/directives/social-bpm.js?version=' + social_bpm_widget_version + '"></script>');
document.write('<script type="text/javascript" src="client/src/app/services/data-service.js?version=' + social_bpm_widget_version + '"></script>');


function loadSocialBpmWidget(filterType) {
  document.write('<div>');
  document.write('  <social-bpm-widget filter-type="' + filterType + '"></social-bpm-widget>');
  document.write('</div>');
}

console.log("Hello 2");