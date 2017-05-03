'use strict';

(function(){
    angular
        .module("app")
        .controller("logInCtrl", function($scope, LogInService) {
            $scope.user = {
                fullname: "",
                username: "",
                email: "",
                password: "",
                confirmPw: ""
            };
            $scope.regex = "^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$";	//for validation 

            $scope.getCredentials = function(){

                console.log($scope.user);
            };

            $scope.getNewCredentials = function(){

                console.log($scope.user);
            };

            // LogInService.getCredentials()
            //   .then(function(credentials) {
            //     $scope.user = credentials;
            //     console.log($scope.user);
            //   });
        });

})();
