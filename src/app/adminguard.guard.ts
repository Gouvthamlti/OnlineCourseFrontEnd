import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  constructor(public router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('AdminLoggedIn')=="true"){​​​​

        return true;
  
      }​​​​      
      else {​​​​
     
        this.router.navigate(['/admin'],{​​​​queryParams:{​​​​returnUrl:state.url}​​​​}​​​​)
  
        return false;
  
      }​​​​
    
  }
  
}
