module app.User {
  interface INavigationScope{
    title: string;
    users: app.domain.IUser[];
    currentUser: app.domain.IUser;
  }

  class UserCtrl implements INavigationScope {
    title: string;
    users: app.domain.IUser[];
    currentUser: app.domain.IUser;

    static $inject=["userService"];
    constructor(
      private userService: app.common.IUserService,
      currentUser: app.domain.IUser
    ) {
      var vm = this;
      vm.title = "User List"
      vm.users =[];

      userService.getById(currentUser.uniqueId)
      .then((user: app.domain.IUser): void => {
        vm.currentUser = new app.domain.User(
          user.uniqueId,
          user.firstName,
          user.lastName,
          user.email,
          user.password
        );
      });
    }
  }

  angular
  .module("nuProject")
  .controller("userCtrl", UserCtrl)
}
