import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { log } from 'console';
import { Boat } from '../models/boat';

@Component({
  selector: 'app-boatcomplaintform',
  templateUrl: './boatcomplaintform.component.html',
  styleUrls: ['./boatcomplaintform.component.css']
})
export class BoatcomplaintformComponent implements OnInit {
   boat=new Boat();
   submitted:boolean=false;

  
  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form:NgForm){
// console.log(form.value);
// console.log(form.value.product_group);
// console.log(form.value.productDetails.product);
// console.log(form.value.email);
this.submitted=true;
 this.boat.product_group=form.value.product_group;
 this.boat.product=form.value.productDetails.product;
 this.boat.email=form.value.email;
   
   this.saveProductDetail(this.boat)
  }

  saveProductDetail(boat){
//     console.log(form.value);
// console.log(form.value.product_group);
// console.log(form.value.productDetails.product);
// console.log(form.value.email);

console.log(boat.product_group);
console.log(boat.product);
console.log(boat.email);




  }

}

