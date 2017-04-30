'use strict';

var host = 'http://localhost:3000';

(function(){
  angular
    .module("app")
    .service("adminService", function($q, $http) {

      return {
        getCredentials: function() {
          var deferred = $q.defer();
          $http.get(host + '/#/admin')
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(err) {
              deferred.reject(err);
            });

          return deferred.promise;
        }
      }
  });
})();
