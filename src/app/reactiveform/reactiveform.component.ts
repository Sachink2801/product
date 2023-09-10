import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myReactiveForm:FormGroup;
  
  username=[]

  constructor() {
   this.createForm();
    
   }

  ngOnInit() {
  }

  createForm(){
    this.myReactiveForm=new FormGroup({
      'username':new FormControl("" , Validators.required),
      'email':new FormControl("" ,Validators.required)
    })
  }

  onSubmit(){
    console.log(this.myReactiveForm);
    this.username.push(this.myReactiveForm.value)
    console.log(this.username);
    
    
  }

  reset(){
    console.log(this.myReactiveForm);
    
  }

  
  

  }


