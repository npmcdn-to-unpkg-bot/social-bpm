var sortMenuModule = angular.module('social-bpm-app', []);

sortMenuModule.directive("sortMenu", function() {
  return {
    restrict: "A",
    link: function(scope, element, attrs) {
      alert("Hello");
      element.menu();
    }
  }
});