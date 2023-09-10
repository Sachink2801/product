import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputdecorator',
  templateUrl: './inputdecorator.component.html',
  styleUrls: ['./inputdecorator.component.css']
})
export class InputdecoratorComponent implements OnInit {

  @Input() mobiles:any[];
  constructor() { }
  data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  

  ngOnInit() {
    console.log("This is from child",this.mobiles);
    
  }

}
