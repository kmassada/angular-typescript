module app {
  var main =  angular.module("nuProject")

  main.run(appRun);

  appRun.$inject = ["$rootScope","$log"];
  function appRun($rootScope: ng.IRootScopeService, $log: ng.ILogService): void {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

    // any public action is allowed
    var isPublicAction = angular.isObject(toState.data) && toState.data.isPublic === true;

    if (isPublicAction) {
      $log.debug("[appRun]: checking public routes");
      return;
    }
    // stop state change
    $log.error("[appRun]: stop route, route is not public");
    event.preventDefault();
  });
  $rootScope.$on('$routeChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    $log.debug("[appRun]: route change success");
  });
  }
}
