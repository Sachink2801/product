import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 iplTeam:string[]=[];

 employeeRecord :any= [
  {
    eName:'Sachin', eCity:'Mumbai' ,eSal:'20000'
  },
  {
    eName:'Sanjay', eCity:'Pune' ,eSal:'4400000'
  }
 ]

 foods : string[] = [];
  constructor() { }

  ngOnInit() {
  }

  ipl(value){
   this.iplTeam=value;
   console.log(value);
  }

  getChildData(value){
console.log(value);

  }

  show(){

  }
}
