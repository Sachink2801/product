import { Component, OnInit } from '@angular/core';
// import { DemoService } from '../service/demoservice.service';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
   prise : number= 80000
  obser;
  obj =  {id:'101' , name:'Sachin'};
  
  todaysDate = new Date();
  birthday=new Date(2000, 1 ,28);

  constructor(private _utilityservice :UtilityService) { 
    this.obser=this._utilityservice.userName;
  }

  ngOnInit() {
  }

}
