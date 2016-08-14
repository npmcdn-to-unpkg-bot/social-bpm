(function (ng, app) {
  "use strict";
  app.service(
    "socialBpmDataService",
    function ($q, $http) {
      function getSocialBpmData() {
        var dataUrl = '/social-bpm/data/data.json';

        var params = [];
        return $http.get(dataUrl, {params: params});
      }

      var apiObj = {
        getSocialBpmData: getSocialBpmData
      };

      // make everything available as public API.
      return (apiObj);
    })

  app.config(['$httpProvider', function ($httpProvider) {
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
  }]);

  app.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      '/client/src/app/views/**']);
  });

  app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.defaults.transformResponse.push(function(responseData){
      convertDateStringsToDates(responseData);
      return responseData;
    });
  }]);

  function convertDateStringsToDates(input) {
    var regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;

    // Ignore things that aren't objects.
    if (typeof input !== "object") return input;

    for (var key in input) {
      if (!input.hasOwnProperty(key)) continue;

      var value = input[key];
      var match;
      // Check for string properties which look like dates.
      if (typeof value === "string" && (match = value.match(regexIso8601))) {
        var milliseconds = Date.parse(match[0])
        if (!isNaN(milliseconds)) {
          input[key] = new Date(milliseconds);
        }
      } else if (typeof value === "object") {
        // Recurse into object
        convertDateStringsToDates(value);
      }
    }
  }


})(socialBpmAngular, socialBpmModule);
