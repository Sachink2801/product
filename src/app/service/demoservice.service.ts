import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiURL='https://jsonplaceholder.typicode.com/';

products=[
  {id:'101',name:'Laptop'},
  {id:'102',name:'Mobile'},
  {id:'103',name:'watch'}
]
  constructor(private http:HttpClient) { }

  display(){
    alert('Subscribe successfully')
  }

  getUserData(){
    let user='users';
     return this.http.get(this.apiURL + user);
  }

  getPostData(){
    let posts='posts';
    this.http.get(this.apiURL + posts)
  }
}
