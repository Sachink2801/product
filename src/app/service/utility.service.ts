import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
//to pass data from one component to another component we use subject 
// subject is one kind of observable And that allow value to multiple observable (multiple subscriber) 

  // userName =new Subject<any>();
  userName =new BehaviorSubject('Angular UI Developer')

  constructor() { }
}

