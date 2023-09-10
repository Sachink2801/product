import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
//  @Input('list') heroes :string[];

@Input() employee : any;

// step 3 we declare the output decorator 
@Output() foodEvent : EventEmitter<string> = new EventEmitter<string>(); 
  constructor() { }

  ngOnInit() {
    // console.log(this.heroes)
    console.log(this.employee);
    
  }

  // step 2 we declare method 
  addToFood(value){
 this.foodEvent.emit(value); //foodEvent is a custom event 
  }

}
