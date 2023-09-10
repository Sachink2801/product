import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderslistComponent } from './orderslist/orderslist.component';
import { OdersRoutingModule } from './oders/oders-routing.module';



@NgModule({
  declarations: [OrderslistComponent],
  imports: [
    CommonModule,
    OdersRoutingModule
  ]
})
export class OrdersModule {
  constructor(){
    console.log("OrdersModule loaded");
    
  }
 }
