/**
 * Krishan Dadlani
 */
var socialBpmModule = socialBpmAngular.module('social-bpm-app', []);

socialBpmModule
  .directive(
    'social-bpm-widget',
    function () {
      return {
        restrict: 'E',
        scope: false,
        templateUrl: 'client/src/app/views/social-bpm-widget.html?version=' + banner_version,
        replace: true,
        controller: function ($scope, $element, $attrs, socialBpmDataService, $window) {
          var filterType = $attrs.filterType;
          // Calling social bpm data via ajax starts here
          console.log("Hello 1");
          socialBpmDataService
            .getSocialBpmData()
            .success(function (response) {
              $scope.rscUrls = response;
            })
            .error(function () {
              if (!window.console) {
                console.log("Could not social bpm data links");
              }
            });
          // Calling social bpm data via ajax ends here
        }
      }
    });
