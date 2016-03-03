module app.common {
    interface IVenueService{

    }
    export interface IVenueResourceClass extends ng.resource.IResourceClass<ng.resource.IResource<app.domain.IVenue>>{
      update(IVenue: app.domain.IVenue) : app.domain.IVenue;
    }

    export class VenueService implements IVenueService{
      static $inject = ["$resource", "url"];
      constructor(private $resource: ng.resource.IResourceService, private url: URL_CONSTANTS){
      }

    getVenueResourceClass(): IVenueResourceClass{
      // Define custom action as IActionDescriptor
      var updateAction : ng.resource.IActionDescriptor = {
          method: 'PUT',
          isArray: false
      };
      return <IVenueResourceClass>
      this.$resource(this.url.BASE_API+"/v1/venues/:id", {id: '@_id'} ,{
        update: updateAction
      });
    }
  }
  angular
    .module("common.services")
    .service("venueService", VenueService);
}
