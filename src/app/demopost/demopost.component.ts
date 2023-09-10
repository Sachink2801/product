import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {
  
  

  arrayPost : Post[] = [];
  constructor(private _postService :PostService) { }

  ngOnInit() {
    return this._postService.getPost().subscribe(res => {
      console.log('jsonPlaceholder :' ,res);
      // this.arrayPost=res;
      console.log('arrayPost :', this.arrayPost);
      
    })
  }

}
