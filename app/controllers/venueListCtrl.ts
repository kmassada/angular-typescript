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

    static $inject=["dataAccessService"];
    constructor(private dataAccessService: app.common.DataAccessService) {
      this.title = "Venue List"
      this.venues =[];

      var venueResource= dataAccessService.getVenueResource();
      venueResource.query((data: app.domain.IVenue[])=> {
        this.venues = data;
      });
    }
  }

  angular
  .module("nuProject")
  .controller("VenueListCtrl", VenueListCtrl)
}
