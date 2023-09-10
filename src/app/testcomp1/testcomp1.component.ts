import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-testcomp1',
  templateUrl: './testcomp1.component.html',
  styleUrls: ['./testcomp1.component.css']
})
export class Testcomp1Component implements OnInit {
  
  userName;
  constructor( private _utilityservice :UtilityService) {
    this._utilityservice.userName.subscribe(res=> {
      this.userName=res;
      console.log(res);
      
    })
   }

  ngOnInit() {
  }

  updateProduct(uname){
  // console.log(uname.value);

  let emp = {
    name: 'sanjay',
    id: '101',
  }
  this._utilityservice.userName.next( JSON.stringify(emp));
  
  }
}
