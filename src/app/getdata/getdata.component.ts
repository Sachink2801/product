import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {
 
  arrayPost: Post[] = [];

  constructor(private _postService :PostService) { }

  ngOnInit() {
    return this._postService.getPost().subscribe(res => {
      this.arrayPost= res;
      console.log(' ArrayPost Data :' ,res);
    })
  }

}
