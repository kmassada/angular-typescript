module app {
  var main =  angular.module("nuProject")

  main.run(appRun);

  appRun.$inject = ["$rootScope"];
  function appRun($rootScope: ng.IRootScopeService): void {

  }
}
