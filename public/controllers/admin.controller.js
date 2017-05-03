'use strict';

(function(){
    angular
        .module("app")
        .controller("adminCtrl", function($scope, adminService) {
            $scope.name = "Janel";
            $scope.news = [];

            adminService.getCredentials()
              .then(function(data) {
                $scope.news = data;
              });
        });

})();
