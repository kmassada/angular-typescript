module app.common {
    interface IDataAccessService{

    }
    interface IVenueResource extends ng.resource.IResource<app.domain.IVenue>{

    }

    export class DataAccessService implements IDataAccessService{
      static $inject = ["$resource", "url"];
      constructor(private $resource: ng.resource.IResourceService, private url: URL_CONSTANTS){
        alert(this.url.BASE);
      }

    getVenueResource(): ng.resource.IResourceClass<IVenueResource>{
      return this.$resource("/api/venues/:venueId");
    }
  }
  angular
    .module("common.services")
    .service("dataAccessService", DataAccessService);
}
