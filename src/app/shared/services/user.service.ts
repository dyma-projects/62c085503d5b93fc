import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users$:BehaviorSubject<string[]> = new BehaviorSubject([]);
  
  addUser(user:string):void {
    this.users$.value.push(user);
  }
}
