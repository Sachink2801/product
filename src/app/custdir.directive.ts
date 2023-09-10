import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective {

  constructor(private e1:ElementRef, private render :Renderer2 ) { 
    console.log("custom directive apply ");

    //  e1.nativeElement.style.backgroundcolor='gray';
       render.setStyle(e1.nativeElement,'backgroundcolor','yellow')
      }

    }
