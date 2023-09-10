import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { serverComponent } from './server.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { AtrriComponent } from './atrri/atrri.component';
import { CustdirDirective } from './custdir.directive';
import { StringinterComponent } from './stringinter/stringinter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputdecoratorComponent } from './inputdecorator/inputdecorator.component';
import { ParentdecoratorComponent } from './parentdecorator/parentdecorator.component';
import { DemoComponent } from './demo/demo.component';
import { HookComponent } from './hook/hook.component';
import { DirectiveassignComponent } from './directiveassign/directiveassign.component';
// import { SimpletemplateformComponent } from './simpletemplateform/simpletemplateform.component';
import { FormassignComponent } from './formassign/formassign.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { BoatcomplaintformComponent } from './boatcomplaintform/boatcomplaintform.component';
import { PracticeTempFormComponent } from './practice-temp-form/practice-temp-form.component';
import { ReactivePracticeComponent } from './reactive-practice/reactive-practice.component';
// import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
// import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import {  HttpClientModule } from '@angular/common/http';
import { Testcomp1Component } from './testcomp1/testcomp1.component';
import { Testcomp2Component } from './testcomp2/testcomp2.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
// import { PipetestPipe } from './pipetest.pipe';
// import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { SearchPipe } from './search.pipe';
import { PractpipeComponent } from './practpipe/practpipe.component';
// import { FilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DemopostComponent } from './demopost/demopost.component';
import { PraticepostsComponent } from './praticeposts/praticeposts.component';
import { DatabaindingComponent } from './databainding/databainding.component';
import { BbfinanceComponent } from './bbfinance/bbfinance.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { TvComponent } from './product/tv/tv.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { GetdataComponent } from './getdata/getdata.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { CommentspostComponent } from './commentspost/commentspost.component';
import { PoductModule } from './product/poduct.module';
import { OrdersModule } from './orders/orders.module';
import { AdduserComponent } from './adduser/adduser.component';
import { DirectivepractiComponent } from './directivepracti/directivepracti.component';
import { EventdemoComponent } from './eventdemo/eventdemo.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { IplChildComponent } from './ipl-child/ipl-child.component';






@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    DemodirectivesComponent,
    NgSwitchComponent,
    AtrriComponent,
    CustdirDirective,
    StringinterComponent,
    InputdecoratorComponent,
    ParentdecoratorComponent,
    DemoComponent,
    HookComponent,
    DirectiveassignComponent,
    // SimpletemplateformComponent,
    FormassignComponent,
    ReactiveformComponent,
    TemplateFormComponent,
    BoatcomplaintformComponent,
    PracticeTempFormComponent,
    ReactivePracticeComponent,
    Testcomp1Component,
    Testcomp2Component,
    PipedemoComponent,
   
    // PipetestPipe,
   
    // FilterpipeComponent,
   
    SearchPipe,
   
    PractpipeComponent,
   
    // FilterPipe,
   
    DemopostComponent,
   
    PraticepostsComponent,
   
    DatabaindingComponent,
   
    BbfinanceComponent,
   
    LoginComponent,
   
    HomeComponent,
   
    ProductComponent,
   
    ForgotPasswordComponent,
   
    PagenotfoundComponent,
   
    GetdataComponent,
   
    PostdetailsComponent,
   
    CommentspostComponent,
   
    AdduserComponent,
   
    DirectivepractiComponent,
   
    EventdemoComponent,
   
    ChildComponent,
   
    ParentComponent,
   
    IplChildComponent,
    // LaptopComponent,
    // MobileComponent,
    // TvComponent,
    // WashingmachineComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    PoductModule,
    OrdersModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("AppModule loaded ");
    
  }
 }
