import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atrri',
  templateUrl: './atrri.component.html',
  styleUrls: ['./atrri.component.css']
})
export class AtrriComponent implements OnInit {
uname;
  colorVal= 'red';

  people:any[] = [
    {
      "name":"SACHIN",
      "country":"INDIA"
    },

    {
      "name":"SONALI",
      "country":"USA"
    },

    {
      "name":"MAYUR",
      "country":"INDIA"
    },

    {
      "name":"PALLAVI",
      "country":"USA"
    },

    {
      "name":"PRACHI",
      "country":"PAKISTAN"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  // show(value){
  //  this.uname=value;
  // }

//  show(value){
//   this.uname=value;
//  }

show(value){
  
  this.uname=value;
  
}

}
