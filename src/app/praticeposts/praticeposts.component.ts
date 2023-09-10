import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-praticeposts',
  templateUrl: './praticeposts.component.html',
  styleUrls: ['./praticeposts.component.css']
})
export class PraticepostsComponent implements OnInit {

  arryPost : any[] = []
   constructor(private _utilityservice : UtilityService) { }

  ngOnInit() {
    this._utilityservice
  }

}
