module app {

  export interface URL_CONSTANTS {
    BASE: string,
    BASE_API: string
  }

  // TODO: http://stackoverflow.com/questions/35523551/how-to-inject-constants-into-other-modules-in-angular-typescript
  var myConstants = {
     BASE: 'http://localhost:3222',
     BASE_API: 'http://localhost:3222/v1'
  };

  angular
  .module("nuProject")
  .constant("url", myConstants);
}
