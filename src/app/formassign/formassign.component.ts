import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { log } from 'console';
import { Student } from '../models/student';
// import { Student } from '../models/student';

@Component({
  selector: 'app-formassign',
  templateUrl: './formassign.component.html',
  styleUrls: ['./formassign.component.css']
})
export class FormassignComponent implements OnInit {
  defaultvalue:string="Angular";
  defaultgender:string="Male";

  submitted:boolean=false;
  constructor() { }
 
   student:Student;

 
  genders=[
    {id:'1', value:"Male"},
    {id:'2',value:"Female"}
  ]

  

  ngOnInit() {
  }

  onSubmit(form:NgForm){
     console.log(form);
    var stu=new Student();
    stu.course=form.value.course;
    stu.name=form.value.username
    stu.email=form.value.email;
    stu.gender=form.value.gender;
   


    this.saveStudentData(stu);
  }

  saveStudentData(stu:Student){
    console.log(stu.course);
    console.log(stu.name);
    console.log(stu.email);
    console.log(stu.gender);
    
    
    
    

  }
  }
