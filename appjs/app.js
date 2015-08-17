var myApp = angular.module("myApp",['ngRoute','ngSanitize','ngAnimate','myAppDirectives','wu.masonry']);



myApp.config(['$routeProvider', function($routeProvider) {
                $routeProvider.when("/", {templateUrl: "partials/home.html"});
                $routeProvider.when("/allposts", {templateUrl: "partials/allposts.html", controller: "blogController"});
                $routeProvider.when("/post", {templateUrl: "partials/singlepost.html", controller: "blogController"});
                $routeProvider.when("/depts/:dept_id", {templateUrl: "partials/deptview.html", controller: "deptsController"});
                $routeProvider.when("/allprojects", {templateUrl: "partials/allprojects.html", controller: "projectsController"});
                $routeProvider.when("/project", {templateUrl: "partials/singleproject.html", controller: "projectsController"});
                $routeProvider.when("/clubs", {templateUrl: "partials/clubs.html", controller: ""});
                $routeProvider.when("/kores", {templateUrl: "partials/contacts.html", controller: "koreController"});
                $routeProvider.when("/ctf", {templateUrl: "partials/ctf.html"});
                $routeProvider.otherwise({redirectTo: '/'});
                }]);
