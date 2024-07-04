import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public identity: any;

  public testIdentity : boolean = false;

  constructor() { }

  // getIdentity() {
  //   const identity = JSON.parse(localStorage.getItem('identity'));
  //   if (identity !== 'undefined') {
  //     this.identity = identity;
  //   } else {
  //     this.identity = null;
  //   }
  //   return this.identity;
  // }

  getIdentityBoolean() {
    return this.testIdentity;
  }

}
