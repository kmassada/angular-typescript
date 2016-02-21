module app {

  export interface URL_CONSTANTS {
    BASE: string,
    BASE_API: string
  }

  // TODO: http://stackoverflow.com/questions/35523551/how-to-inject-constants-into-other-modules-in-angular-typescript
  var URL_CONSTANTS = {
     BASE: 'http://localhost:3222',
     BASE_API: 'http://localhost:3222/api'
  };

  var main =  angular.module("nuProject")

  main
  .constant("url", URL_CONSTANTS)
}
