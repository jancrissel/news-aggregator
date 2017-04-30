'use strict';
(function(){
    angular
        .module("app", ["ngRoute"])
        .config(config);
        
        config.$inject = ["$routeProvider"];
        function config($routeProvider){
            $routeProvider
                .when('/', {   
                    "controller": "",
                    "templateUrl": "views/home.view.html"
                }) 
                .when('/home', {   
                    "controller": "",
                    "templateUrl": "views/home.view.html"
                })                        
                .when('/login', {   
                    "controller": "logInCtrl",
                    "templateUrl": "views/login.view.html"
                })
                .when('/admin', {   
                    "controller": "adminCtrl",
                    "templateUrl": "views/admin.view.html"
                })
                .otherwise({"redirectTo": "home"});                  //otherwise = else
        }
})();
