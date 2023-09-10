import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinter',
  templateUrl: './stringinter.component.html',
  styleUrls: ['./stringinter.component.css']
})
export class StringinterComponent implements OnInit {

  userName :string="";


  constructor() { }

  ngOnInit() {
  }

  reset(){
    this.userName = "";
   }

}
