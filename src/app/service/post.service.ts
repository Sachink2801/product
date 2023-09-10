import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { devAPIUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _httpClient: HttpClient) { }


  getPost(): Observable<any>{

    return this._httpClient.get(`${devAPIUrl}posts`)
  }

  getPostById(id)
{
  return this._httpClient.get(`${devAPIUrl}posts/`+id)
}

 getDeleteById(id){
  return this._httpClient.delete(`${devAPIUrl}posts/`+id)
}
}
