import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
  
  url:'https://bb-finance.p.rapidapi.com/market/auto-complete';
  constructor(private _httpClient : HttpClient) { 

  }

  getDataBBFinance(){
    let headers =new HttpHeaders({
      'X-RapidAPI-Host' : 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': 'd506f94428msh836d1b5e88235c2p1e0adcjsn2013950a36f1'
    })
    return this._httpClient.get(this.url, {headers : headers})
  }
}
