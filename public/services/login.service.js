'use strict';

var host = 'http://localhost:3000';

(function(){
  angular
    .module("app")
    .service("LogInService", function($q, $http) {

      return {
        getCredentials: function() {
          
          // var deferred = $q.defer();
          // $http.get(host + '/#/login')
          //   .success(function(data) {
          //     deferred.resolve(data);
          //     //console.log(data);
          //   })
          //   .error(function(err) {
          //     deferred.reject(err);
          //   });

          // return deferred.promise;
        }
      }
  });
})();
