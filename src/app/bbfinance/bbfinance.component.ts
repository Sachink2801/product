import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { RapidapiService } from '../service/rapidapi.service';

@Component({
  selector: 'app-bbfinance',
  templateUrl: './bbfinance.component.html',
  styleUrls: ['./bbfinance.component.css']
})
export class BbfinanceComponent implements OnInit {

  constructor(private _rapidservice :RapidapiService ) { }

  ngOnInit() {
    return this._rapidservice.getDataBBFinance().subscribe(res => {
      console.log('BB finance data :',res);
      
    })
  }
  // createPost(){
  //   this._firebaseService.creatPost().subscribe(res => {
  //     console.log('Firebase Post',res);
      
  //   })
  // }

  }



