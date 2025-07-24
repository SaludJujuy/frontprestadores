import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const token = localStorage.getItem('token')
    if(token == undefined) {
      this.router.navigate(['/login'])
      return false
    }
    
     return true;
  }
  
}

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjUsInVzZXJuYW1lIjoic2FsdWRqdWp1eS5pbmZvcm1hdGljYUBnbWFpbC5jb20iLCJub21icmUiOm51bGwsImFwZWxsaWRvIjpudWxsLCJlbWFpbCI6InNhbHVkanVqdXkuaW5mb3JtYXRpY2FAZ21haWwuY29tIiwiaWF0IjoxNjk4MzMxMDYxLCJleHAiOjE2OTg5MzU4NjF9.qF8TpoV5yGNrPgHGnEC8IXLlzAa9y9JIvmmmTs2-Ybs