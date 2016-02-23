module app.common {
    interface IVenueService{

    }
    export interface IVenueResource extends ng.resource.IResource<app.domain.IVenue>{

    }

    export class VenueService implements IVenueService{
      static $inject = ["$resource", "url"];
      constructor(private $resource: ng.resource.IResourceService, private url: URL_CONSTANTS){
      }

    getVenueResource(): ng.resource.IResourceClass<IVenueResource>{
      return this.$resource(this.url.BASE_API+"/v1/venues/:id");
    }
  }
  angular
    .module("common.services")
    .service("venueService", VenueService);
}
