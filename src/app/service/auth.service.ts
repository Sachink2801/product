import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkUserNameAndPassword(email:string, pwd: string){
    if(email=="sk143@gmail.com" && pwd=='sachin123'){
      localStorage.setItem('email','sk143@gmail.com');
      return true;
    }
    else{
      return false;
    }
  }
}
