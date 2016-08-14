var socialBpmModule = angular.module('social-bpm-app', []);

socialBpmModule.directive(
  'socialBpmWidget',
  function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'client/src/app/views/social-bpm-widget.html?version=' + new Date().getTime(),
      replace: true,
      controller: function ($scope, $element, $attrs, socialBpmDataService) {
        var filterType = $attrs.filterType;
        console.log(filterType);
        $scope.todayDate = socialBpmJQuery.datepicker.formatDate('dd-MM-yy', new Date());
        // Calling social bpm data via ajax starts here
        socialBpmDataService
          .getSocialBpmData()
          .success(function (response) {
            $scope.posts = response;
          })
          .error(function () {
            if (!window.console) {
              console.log("Could not load social bpm data.");
            }
          });
        // Calling social bpm data via ajax ends here

        $scope.sortByMostRecent = function () {
          socialBpmDataService
            .getSocialBpmData()
            .success(function (response) {
              $scope.posts = response.sort(mostRecentSort);
              return false;
            })
            .error(function () {
              if (!window.console) {
                console.log("Could not load social bpm data.");
              }
            });
        };

        function mostRecentSort(a, b) {
          return new Date(b.Published).getTime() - new Date(a.Published).getTime();
        };

        $scope.sortByOldestFirst = function () {
          socialBpmDataService
            .getSocialBpmData()
            .success(function (response) {
              $scope.posts = response.sort(oldestFirstSort);
              return false;
            })
            .error(function () {
              if (!window.console) {
                console.log("Could not load social bpm data.");
              }
            });
        };

        function oldestFirstSort(a, b) {
          return new Date(a.Published).getTime() - new Date(b.Published).getTime();
        };

        $scope.filterByCiti = function () {
          socialBpmDataService
            .getSocialBpmData()
            .success(function (response) {
              $scope.posts = response.filter(socialTagFilter("Citi"));
              return false;
            })
            .error(function () {
              if (!window.console) {
                console.log("Could not load social bpm data.");
              }
            });
        };

        $scope.filterByNyu = function () {
          socialBpmDataService
            .getSocialBpmData()
            .success(function (response) {
              $scope.posts = response.filter(socialTagFilter("NYU"));
              return false;
            })
            .error(function () {
              if (!window.console) {
                console.log("Could not load social bpm data.");
              }
            });
        };

        function socialTagFilter(socialTag) {
          return function(post) {
            return post.socialTag === socialTag;
          }
        };


      }
    }
  });

socialBpmModule.directive("sortMenu", function() {
  return {
    restrict: "A",
    link: function(scope, element, attrs) {
      console.log("Menu");
      element.menu();
    },
    controller: function ($scope, $element, $attrs, socialBpmDataService) {
      $scope.canShowMenu = false;
      $scope.toggleMenu = function() {
        if(!$scope.canShowMenu) {
          $scope.canShowMenu = true;
        } else {
          $scope.canShowMenu = false;
        }
      }
    }
  }
});
