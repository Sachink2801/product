import { Component, OnInit } from '@angular/core';
import { Mobiles } from '../models/mobile';

@Component({
  selector: 'app-parentdecorator',
  templateUrl: './parentdecorator.component.html',
  styleUrls: ['./parentdecorator.component.css']
})
export class ParentdecoratorComponent implements OnInit {

  mobile:Mobiles[]=[
    {
      companyName:"i phone ",model:" i phone 14", prise:"80,000",storage:"256GB"
    } ,

    {
      companyName:"Samsung",model:"note 9", prise:"85,000",storage:"265GB"
    } ,

    {
      companyName:"Redmi",model:"note 7", prise:"20,000",storage:"128GB"
    } 
  
]
  

  constructor() { }

  ngOnInit() {
    console.log("this is form parent :",this.mobile);
    
  }

}
