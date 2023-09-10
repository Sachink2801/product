import { Component, OnInit } from '@angular/core';
import { DemoService } from '../service/demoservice.service';

@Component({
  selector: 'app-servicecomp2',
  templateUrl: './servicecomp2.component.html',
  styleUrls: ['./servicecomp2.component.css']
})
export class Servicecomp2Component implements OnInit {
  
  watches={};
  constructor(private _demoservice : DemoService) { }

  ngOnInit() {
    this.watches=this._demoservice.products;
  }

  OnSubscribe(){
    this._demoservice.display();
  }


}
