/**
 * Krishan Dadlani
 */
var socialBpmModule = angular.module('social-bpm-app', []);
socialBpmModule.directive(
  'socialBpmWidget',
  function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'client/src/app/views/social-bpm-widget.html',
      replace: true,
      controller: function ($scope, $element, $attrs, socialBpmDataService) {
        var filterType = $attrs.filterType;
        // Calling social bpm data via ajax starts here
        socialBpmDataService
          .getSocialBpmData()
          .success(function (response) {
            $scope.rscUrls = response;
          })
          .error(function () {
            if (!window.console) {
              console.log("Could not social bpm data.");
            }
          });
        // Calling social bpm data via ajax ends here
      }
    }
  });
