import { style } from '@angular/animations';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { product } from '../models/product';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit, OnChanges,DoCheck ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() userId :number;
  @Input() parentData:string;
  @Input() product:product;
  @ContentChild("child", {static:false}) ContentChild:ElementRef;
  @ViewChild("view",{static:false}) viewChild:ElementRef;
pi;

counter;
num:number=1;
  constructor() { 
    // this.pi=3.14;
    console.log(" constructor called ");
    
  }
  ngOnDestroy(): void {
   console.log("ngOnDestroy called ");
   clearInterval(this.counter);
  }
  ngAfterViewChecked(): void {
   console.log("ngAfterViewChecked called ");
   this.viewChild.nativeElement.setAttribute("style",`color:${this.parentData }`);
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called ", this.viewChild);
    this.viewChild.nativeElement.setAttribute("style",`color:brown`);
    
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called" , this.ContentChild);
    
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked is called",this.ContentChild);
    this.ContentChild.nativeElement.setAttribute('style',`color:${this.parentData}`);
    
    
  }
  ngAfterContentInit(): void {
    // console.log("ngAfterContentInit is called",this.ContentChild);
    // this.ContentChild.setAttribute('style','color:green')
    console.log("ngAfterContentInit called",this.ContentChild);

    //this.ContentChild.nativeElement .setAttribute('style','color:red','margin-left=300px');
    
   // this.ContentChild.nativeElement.setAttribute('style',`color:${this.parentData}`);
    
    
  }
  ngOnChanges(changes: SimpleChanges): void {
  //  console.log("HookComponent ngOnChanges is called" ,this.ContentChild);
  //  console.log(this.parentData);
  console.log("ngOnChange is called");
  
   

  //  for (const propName in changes) {
   
  //     const prop = changes [propName];

  //     const{previousValue,currentValue,firstChange}=prop;

  //     console.log(`prop name $(propName)`);
  //     console.log(`previous Value $(previousValue)`);
  //     console.log(`current Change $(currentChange)`);
  //     console.log(`first Change $(firstChange)`);
  //     console.log(`-------------------------------  `);
      
    
  //  }
   
  }

  ngOnInit() {
    console.log("ngOnIni called");
    
    this.counter=setInterval(() => {
     this.counter=this.num+1;
     console.log(this.num);
     
    } ,1000)

  }

}
