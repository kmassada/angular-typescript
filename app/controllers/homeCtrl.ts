module app.home {
  interface IHomeModel{
    title: string;
  }
  class HomeCtrl implements IHomeModel {
    title: string;
    static $inject = ["url"];
    constructor(private url: URL_CONSTANTS) {
      this.title = "Home Controller"
      console.log(this.url.BASE);
    }
  }
  angular
  .module("nuProject")
  .controller("HomeCtrl", HomeCtrl);
}
