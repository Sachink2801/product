import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FireBasePost } from '../models/fireBasePost';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 
  
  url : 'https://angular-crud-operations-a97b3-default-rtdb.firebaseio.com/';

  user : any[] =[
    {id:'101', name:'Sachin',gender:'Male'},
    {id:'102', name:'Atharv',gender:'Male'},
    {id:'103', name:'Sonali', gender:'Female'}
  ]
  constructor(private _httpclient :HttpClient) { }

   creatPost(){
    let postData = {
      title :'this is angular CRUD ',
      content :'this is fireBase CRUD operation'
    }
     return this._httpclient.post(this.url , postData); //2nd parameter body hai to isliye we have to pass there body 
                                                              //in get we usr query parameter that's why 
   }
}
