'use strict';

var host = 'http://localhost:3000';
//var mysql = require('mysql');

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
/*          connectDB.query('SELECT * from ADMIN', function(error, results, fields){
            console.log(results);
          });*/
        },
        getNewCredentials: function() {

        }
      }
  });
})();
