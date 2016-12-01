import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  public users = this.generateArray(this.getUsers());

  generateArray(obj) {
    return Object.keys(obj).map((key) => { return obj[key] });
  }

  getUsers() {
    return [
      { name: "Skyler", phone: "(666) 9999-9999" },
      { name: "Mike Ehrmantraut", phone: "(666) 9999-9999" },
      { name: "Saul Goodman", phone: "(505) 503-4455" },
      { name: "Gus Fring", phone: "(666) 9999-9999" },
      { name: "Jesse Pinkman", phone: "(666) 9999-9999" },
      { name: "Todd Alquist", phone: "(666) 9999-9999" },
      { name: "Gale Boetticher", phone: "(666) 9999-9999" },
      { name: "Lawson", phone: "(666) 9999-9999" },
      { name: "Lydia Rodarte", phone: "(666) 9999-9999" },
      { name: "Tuco Salamanca", phone: "(666) 9999-9999" }
    ];
  }

  addUsers(_newUser: Object) {
    this.users.push(_newUser);
  }

  constructor() {
  }

}
