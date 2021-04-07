import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { tap } from 'rxjs/operators';
import { state } from '@angular/animations';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticationService,private router:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable <boolean> | Promise <boolean> | boolean{
      if(this.auth.isAuth){
        return true;
      } else {
        this.router.navigate(['/auth/login'])
      }

  }
}