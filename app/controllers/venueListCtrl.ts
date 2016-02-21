module app.VenueList {
  interface IVenueListModel{
    title: string;
    venues: app.domain.IVenue[];
    currentVenue: app.domain.IVenue;
  }

  class VenueListCtrl implements IVenueListModel {
    title: string;
    venues: app.domain.IVenue[];
    currentVenue: app.domain.IVenue;

    static $inject=["venueService"];
    constructor(private venueService: app.common.VenueService) {
      this.title = "Venue List"
      this.venues =[];

      var venueResource= venueService.getVenueResource();
      venueResource.query((data: app.domain.IVenue[])=> {
        this.venues = data;
      });
    }
  }

  angular
  .module("nuProject")
  .controller("VenueListCtrl", VenueListCtrl)
}
