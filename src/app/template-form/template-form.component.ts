import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  defaultGender:string='Male';
  defaultValue:string="Angular";
  employee=new Employee();
  submitted:boolean=false;

 genders=[
   {id:1,value:"Male"},
    {id:2, value:"Female"}
 ]
  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form:NgForm){
    // console.log(form.value);
    // console.log(form.value.userDetails.username);
    // console.log(form.value.userDetails.email);
    // console.log(form.value.course); 

    this.submitted=true;
    this.employee.course=form.value.course;
    this.employee.username=form.value.userDetails.username;
    this.employee.email=form.value.userDetails.email;
    this.employee.gender=form.value.gender;
  
    // this.saveEmployeeData(this.employee);
   form.reset();
   form.controls["course"].setValue("Angular");
   form.controls["gender"].setValue("Male");
  }

  saveEmployeeData(employee){
    
  //   console.log(form.value);
  //   console.log(form.value.userDetails.username);
  //   console.log(form.value.userDetails.email);
  //   console.log(form.value.course); 

       console.log(employee.course);
       console.log(employee.email);
       console.log(employee.username);
       console.log(employee.gender);
       
       
       
              
   }


  

}
    
