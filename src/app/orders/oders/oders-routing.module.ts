import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderslistComponent } from '../orderslist/orderslist.component';


const routes: Routes = [
  {path : '',component:OrderslistComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OdersRoutingModule { }
