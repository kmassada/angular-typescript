module app {
  var main =  angular.module("nuProject", [
    "ui.router",
    "common.services"
  ]);

  main.config(routeConfig);
  routeConfig.$inject = ["$stateProvider","$urlRouterProvider"];
  function routeConfig($stateProvider: ng.ui.IStateProvider,
                      $urlRouterProvider: ng.ui.IUrlRouterProvider): void {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: "../partials/_home.html",
        controller: "HomeCtrl",
        controllerAs: "vm",
        data: { isPublic: true },
    });

    $stateProvider
    .state('venues', {
        url: '/venues',
        templateUrl: "../partials/_venues.html",
        controller: "VenueListCtrl",
        controllerAs: "vm",
        data: { isPublic: false },
    });
  }
}
