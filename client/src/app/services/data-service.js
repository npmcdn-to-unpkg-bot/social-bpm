(function (ng, app) {
  "use strict";
  app.service(
    "socialBpmDataService",
    function ($q, $http) {
      function getSocialBpmData() {
        var dataUrl = AWS_SERVER_URL + 'data/data.json';

        var params = [];
        return $http.jsonp(dataUrl, {params: params});
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

})(socialBpmAngular, socialBpmModule);
