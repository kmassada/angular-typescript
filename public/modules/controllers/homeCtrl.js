var app;
(function (app) {
    var home;
    (function (home) {
        var HomeCtrl = (function () {
            function HomeCtrl() {
                this.title = "Home Controller";
            }
            return HomeCtrl;
        }());
        angular
            .module("nuProject")
            .controller("HomeCtrl", HomeCtrl);
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
