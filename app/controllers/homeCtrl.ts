module app.home {
  interface IHomeModel{
    title: string;
  }
  class HomeCtrl implements IHomeModel {
    title: string;

    constructor() {
      this.title = "Home Controller"
    }
  }
  angular
  .module("nuProject")
  .controller("HomeCtrl", HomeCtrl);
}
