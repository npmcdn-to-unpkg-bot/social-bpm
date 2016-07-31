(function( ng, app ) {
  "use strict";
  app
    .factory('socialBpmDataService', ["$http", '$window', function($http, $window) {
      return {
        getSource: function(mode) {
          var dataUrl = DATA_SERVER_URL + '~indinova/social-bpm-data/data.json';

          var params = [];
          return $http.jsonp(dataUrl, {params : params});
        }
      }
    }]);
})( angularBanner, dataModule );