import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {
heroList : string[] =[];
  constructor() { }

  ngOnInit() {
  }

  // show(value){
  //  this.heroList=value;
  //  console.log(value);
  // }

  addHero(value){
   
    this.heroList.push(value);
    console.log(value);
    
  }

}
