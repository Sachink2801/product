import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipl-child',
  templateUrl: './ipl-child.component.html',
  styleUrls: ['./ipl-child.component.css']
})
export class IplChildComponent implements OnInit {
  
  @Input() name : string[];
  constructor() { }

  ngOnInit() {
    console.log(this.name);
    
    
  }

}
