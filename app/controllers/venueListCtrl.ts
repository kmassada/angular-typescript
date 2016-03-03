module app.Venue {
  interface INavigationScope{
    title: string;
    loading: boolean;
    venues: app.domain.IVenue[];
    currentVenue: app.domain.IVenue;
    venueResource: app.common.IVenueResourceClass;
    load(): void;
    edit(venue: app.domain.Venue): void;
    get(id: string): void;
    remove(venue: app.domain.Venue): void;
    save(venue: app.domain.Venue): void;
  }

  class VenueListCtrl implements INavigationScope {
    title: string;
    loading: boolean;
    venues: app.domain.IVenue[];
    currentVenue: app.domain.IVenue;
    venueResource: app.common.IVenueResourceClass;

    static $inject=[ "$log", "$scope", "$rootScope", "$uibModal", "venueService" ];
    constructor(
      private $log: ng.ILogService,
      private $scope: ng.IScope,
      private $rootScope: ng.IRootScopeService,
      private $uibModal: ng.ui.bootstrap.IModalService,
      private venueService: app.common.VenueService
    ) {
      var vm = this;
      vm.title = "Venue List"
      vm.venues =[];
      vm.loading = true;

      vm.venueResource = venueService.getVenueResourceClass();
      vm.load();

      $scope.$on("venue:load", function(event, data) {
        vm.loading = true;
        vm.load();
        vm.$log.debug("[VenueListCtrl]: Event Caught");
      });

    }


    edit(venue: app.domain.Venue) :void {
      this.currentVenue=<app.domain.IVenue>{};
      if(venue && venue._id){
        this.get(venue._id)
      }
      this.$log.debug("[VenueListCtrl]: current " +this.currentVenue._id);
      this.$log.debug("[VenueListCtrl]: venue" +venue._id);

      var options: ng.ui.bootstrap.IModalSettings = {
        templateUrl: '../partials/_venue-form.html',
        controller: app.Venue.VenueCtrl.controllerId + ' as vm',
        resolve: {
          venue: () => venue
        }
      };

      this.$uibModal.open(options).result
      .then(updatedVenue => {
        this.save(updatedVenue);
        this.$rootScope.$broadcast('venue:load');
      });
    }

    load() {
      this.venueResource.query((data: app.domain.IVenue[])=> {
        this.venues = data;
        this.loading =false;
        this.$log.debug("[VenueListCtrl]: loaded all Venues");
      });
    }
    get(id: string) {
      if(!id){
        return {};
      }
      // use the we created in our service
      this.venueResource.get({id: id},
      (data: app.domain.IVenue)=> {
        this.currentVenue = data;
        this.$log.debug("[VenueListCtrl]: loaded current Venue");
      });
    }
    remove(venue: app.domain.Venue) {
      if(venue && venue._id){
        this.get(venue._id)
      }
      this.loading = true;
      this.venueResource.remove({id: venue._id},()=> {
        this.load();
      });
    }

    save(venue: app.domain.Venue) {
      this.loading = true;
      if(venue._id){
        this.$log.debug("[VenueListCtrl]: Saving current Venue" + venue._id);
        this.get(venue._id);
        var updatedVenue:app.domain.IVenue = venue;
        updatedVenue._id = this.currentVenue._id;
        this.$log.debug("[VenueListCtrl]: Saving current Venue" + updatedVenue.name);
        this.venueResource.update(updatedVenue);
      }else{
        this.$log.debug("[VenueListCtrl]: Creating new venue");
        this.venueResource.save(venue,()=> {
          this.load();
        });
      }
    }
  }

  angular
  .module("nuProject")
  .controller("VenueListCtrl", VenueListCtrl)
}
