import { Component, OnInit } from '@angular/core';
import { DemoService } from '../service/demoservice.service';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {
   
  productss={};
  constructor(private _demoservice : DemoService ) { }

  ngOnInit() {
   this.productss =this._demoservice.products;
   this._demoservice.getUserData().subscribe(data => {
    console.log('Servicecomp1Component' , data );
   })
   
  }

  

  OnSubscribe(){
    this._demoservice.display();
  }

}
