var app;
(function (app) {
    var main = angular.module("nuProject", ["ngRoute"]);
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/home", {
            templateUrl: "../partials/homePageView.html",
            controller: "HomeCtrl as vm"
        })
            .otherwise("/home");
    }
})(app || (app = {}));
