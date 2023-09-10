import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 submitted : boolean = false;

  constructor(private _route : Router, private _authService : AuthService) { }

  ngOnInit() {
  }

  // OnSubmit(form:NgForm){
  // console.log(form.value);
  
  // }

  checkUser(email,pwd){
   
  var output=this._authService.checkUserNameAndPassword(email,pwd);

     if(output==true){
      window.alert('Login successfully');
      this._route.navigate(['product']);
     }

     else{
      window.alert('Invalid username and password');
     }

      // if(email=='sk@gmail.com' && password=='sachin')
      // {
      //   this._route.navigate(['product/laptop'])
      // }

      }
  }


