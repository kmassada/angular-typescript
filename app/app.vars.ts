module app {

  export interface UrlConstants {
    BASE: string,
    BASE_API: string
  }

  // TODO: http://stackoverflow.com/questions/35523551/how-to-inject-constants-into-other-modules-in-angular-typescript
  var UrlConstants = {
     BASE: 'http://api:3222',
     BASE_API: 'http://api:3222/api'
  };

  var main =  angular.module("nuProject")

  main
  .constant("url", UrlConstants)
}
