import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GetdataComponent } from './getdata/getdata.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { AuthGuard } from './auth.guard';
import { AdduserComponent } from './adduser/adduser.component';
import { UnSaveChangesGuard } from './un-save-changes.guard';


const routes: Routes = [ 
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component:LoginComponent },
  {path: 'forgot-password',component:ForgotPasswordComponent},
  {path: 'home' , component:HomeComponent},
  
  {path :'product' , component : ProductComponent,children:[
   {path:'laptop', component:LaptopComponent},
   {path:'mobile', component:MobileComponent},
   {path:'tv', component:TvComponent},
   {path:'washingmachine', component:WashingmachineComponent}
  ]
},
{path:'post',component:GetdataComponent},
{path:'postdetails/:id' ,component:PostdetailsComponent },
{path:'product', canActivate :[AuthGuard] , loadChildren :'./product/poduct.module#PoductModule'},//lazy loading syntax
{path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
{path:'adduser' , component:AdduserComponent , canDeactivate :[UnSaveChangesGuard]},

{path:'**' , component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   
   exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log('AppRoutingModule loaded');
    
  }
 }
