'use strict';

(function(){
    angular
        .module("app")
        .controller("logInCtrl", function($scope, LogInService) {
            $scope.login = [];
            $scope.regex = "^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$";	//for validation 

            LogInService.getCredentials()
              .then(function(credentials) {
                $scope.login = credentials;
              });
        });

})();
