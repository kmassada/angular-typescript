module app.common {
    export interface IUserService{
      getById(uniqueId: string): ng.IPromise<app.domain.IUser>
    }

    class UserService implements IUserService{
      static $inject = ["$http", "url"];
      constructor(private $http: ng.IHttpService, private url: UrlConstants){
      }
      getById(uniqueId: string): ng.IPromise<app.domain.IUser>{
        return this.$http.get(this.url.BASE_API + '/users/' + uniqueId)
        .then((response: ng.IHttpPromiseCallbackArg<app.domain.IUser>): app.domain.IUser => {
          return response.data;
        })
      }
  }
  angular
    .module("common.services")
    .service("userService", UserService);
}
