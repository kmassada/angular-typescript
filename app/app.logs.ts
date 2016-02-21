module app {
  var LOG_LEVEL = {
     LEVEL: 'debug',
     DEBUG: true
  };

  export interface LOG_LEVEL {
    LEVEL: string,
    DEBUG: boolean
  }

  var main =  angular.module("nuProject")

  main.config(setloglevel);
  setloglevel.$inject = ['$logProvider', 'logLevel'];

  function setloglevel($logProvider: ng.ILogProvider, logLevel: LOG_LEVEL) {
    $logProvider.debugEnabled(true);
  }

  main.constant("logLevel", LOG_LEVEL);
}
