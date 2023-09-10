import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-directivepracti',
  templateUrl: './directivepracti.component.html',
  styleUrls: ['./directivepracti.component.css']
})
export class DirectivepractiComponent implements OnInit {

  isShow:boolean=false;
  title:string="Top 3 Movies";
  movies:Movie[]=[
    {title: 'Hero',director:'Sachin',cast:'Salman',releaseDate:'2004',},
    {title: 'zero',director:'Sanjay',cast:'Amir',releaseDate:'2004',},
    {title: 'KGF',director:'Nil',cast:'Yesh',releaseDate:'2004',}
  ]

  constructor() { }

  ngOnInit() {
  }

}
