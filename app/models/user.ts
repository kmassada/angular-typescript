module app.domain {
  export interface IUser {
    uniqueId: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  export class User implements IUser {
    constructor(
      public uniqueId: string,
      public firstName: string,
      public lastName: string,
      public email: string,
      public password: string
    ){}
  }
}
