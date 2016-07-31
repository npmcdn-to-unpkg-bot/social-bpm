(function (ng, app) {
  "use strict";
  app
    .controller(
      'DataController', [
        '$scope',
        'socialBpmDataService',
        function ($scope, $element, $attrs, socialBpmDataService) {
          // var filterType = $attrs.filterType;
          console.log($scope);
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
        }])
})(socialBpmAngular, socialBpmModule);