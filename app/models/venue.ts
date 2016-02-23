module app.domain {
  export interface IVenue {
    _id: string;
    name: string;
    location: string;
    category: string;
  }
  export class Venue implements IVenue {
    constructor(
      public _id: string,
      public name: string,
      public location: string,
      public category: string
    ){}
  }
}
