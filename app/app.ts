module app {
  var main =  angular.module("nuProject", [
    "ui.router"
  ]);

  main.config(routeConfig);
  routeConfig.$inject = ["$stateProvider","$urlRouterProvider"];
  function routeConfig($stateProvider: ng.ui.IStateProvider,
                      $urlRouterProvider: ng.ui.IUrlRouterProvider): void {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: "../partials/homePageView.html",
        controller: "HomeCtrl",
        controllerAs: "vm",
        data: { isPublic: true },
    });
  }
}
