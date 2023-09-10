import { Component, OnInit } from '@angular/core';
import { product } from './models/product';
import { DemoService } from './service/demoservice.service';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
  constructor(private _demoservice :DemoService , private _postService :PostService){

  }
  ngOnInit() : void {
    this._demoservice.getUserData().subscribe(data => {
      console.log('user data :' , data );
      
    })


  }


  data:string='blue';
  name:string;
  prise:number;
  product:product=new product();
  title = 'angularapp';
  uname="i am from app component"
  public uid:number;


foods:string[] = [];

bike:string[]=[];

demoDestroy:boolean= true;
demoCom(){
  this.demoDestroy=false;
}


destroyComp:boolean= true;

destroy(){
  this.destroyComp=false;
}

getDataFromChild(value){

  console.log(value);
  
}

getDataOfBike(value){
  console.log(value);
  
}

handleData(value){
this.data= value.target.value;
}

updateProduct(){
  this.product.name=this.name;
  // this.product.prise=this.prise;
}

DeletePost(){
  this._postService.getDeleteById(1).subscribe(res=> {
    console.log("Delete post data :", res);
    
  })
}
}
