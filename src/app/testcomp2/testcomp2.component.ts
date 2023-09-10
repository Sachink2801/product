import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-testcomp2',
  templateUrl: './testcomp2.component.html',
  styleUrls: ['./testcomp2.component.css']
})
export class Testcomp2Component implements OnInit {
  
  userName;
  constructor(private _utilityservice : UtilityService) { 
    this._utilityservice.userName.subscribe(res => {
      this.userName=res;
      console.log(res);
      
    })
  }

  ngOnInit() {
  }

  updateProduct(uname){
    // console.log(uname.value);
    //next() is use to send message to observable

    let emp = {
     name : 'sachin',
     id :'102'
    }
    this._utilityservice.userName.next(JSON.stringify(emp));
    
  }
}
