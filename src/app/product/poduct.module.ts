import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';



@NgModule({
  declarations: [
    LaptopComponent,
    MobileComponent,
    TvComponent,
    WashingmachineComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PoductModule {
  constructor(){
    console.log("PoductModule loaded");
    
  }
 }
