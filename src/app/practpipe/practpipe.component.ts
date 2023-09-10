import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practpipe',
  templateUrl: './practpipe.component.html',
  styleUrls: ['./practpipe.component.css']
})
export class PractpipeComponent implements OnInit {
  
  nameSearch:string= '';

  productArray:any[]=[
    {
      Sno:'101',
      Product:'Iphone',
      Prise:'70000',
      Availability:'Available'
    },

    {
      Sno:'101',
      Product:' Mi',
      Prise:'17000',
      Availability:'Available'
    },

    {
      Sno:'101',
      Product:'Sony',
      Prise:'30000',
      Availability:'Available'
    },

    {
      Sno:'101',
      Product:'Vivo',
      Prise:'21000',
      Availability:'Not Available'
    }


  ]
  constructor() { }

  ngOnInit() {
  }

}
