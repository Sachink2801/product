import { EventEmitter, Output ,Component, OnInit, ContentChild, ElementRef } from "@angular/core";


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

@Output() foodEvent: EventEmitter<string>=new EventEmitter<string>()

@Output() bikeEvent: EventEmitter<string>=new EventEmitter<string>()


  constructor() { }

  ngOnInit() {

  }
 
  // addtofood(value){
     
  //   // foodeven is nothing but aur (custom) event 

  //   this.foodEvent.emit(value)

  // }

  // bikeName(value){
   
  // this.bikeEvent.emit(value)

  // }

}
