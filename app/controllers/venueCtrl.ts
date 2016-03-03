module app.Venue {

  export class VenueCtrl {
    static controllerId = 'VenueCtrl';
    static $inject = ['$uibModalInstance', 'venue'];

    constructor(private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, public venue: app.domain.IVenue) {
      var vm = this;
    }

    save() {
       this.$uibModalInstance.close(this.venue);
    }

    cancel() {
       this.$uibModalInstance.dismiss('cancel');
    }
  }

  angular
  .module("nuProject")
  .controller("VenueCtrl", VenueCtrl)
}
