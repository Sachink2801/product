import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {

 

  isShow: boolean=true;

  title:string="Top 3 Movies"

  movies:Movie[]=[
    {title:'3 Idiots', director:'Rajkumar',cast:'Amir_khan',releaseDate:'2007'},
    {title:'Kantara', director:'Rishab',cast:'Rishab',releaseDate:'2022'},
    {title:'KGF', director:'Prashant_Neel',cast:'Yesh',releaseDate:'2019'}

  ]

    @Input() demoInputMsg:string                         //using @input decorator ==parent to child .
  constructor() { }

  ngOnInit() {
    console.log("this is from parent:",this.demoInputMsg);
    
  }

}
