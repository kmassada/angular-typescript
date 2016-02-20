module app.domain {
  export interface IVenue {
    name: string;
    location: string;
    category: string;
  }
  export class Venue implements IVenue {
    constructor(
      public name: string,
      public location: string,
      public category: string
    ){}
  }
}
