import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getData(){
    return {name: 'peter', age: '23', id: 100}
  }
}
