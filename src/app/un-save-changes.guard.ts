import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';

@Injectable({
  providedIn: 'root'
})
export class UnSaveChangesGuard implements CanDeactivate<AdduserComponent> {

  canDeactivate(component: AdduserComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(component.userName.dirty){
      return window.confirm('you have unsaved changes ...Are you sure want to navigate ...');
     }else{
      return false;
     }
    }
  }


  

