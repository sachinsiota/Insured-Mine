import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth.service';
export interface Role{
  role:string;
}
@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let expectedRole:Role[]= [];
    if(this.auth.isAuthenticated()
  ) {
      return true;
    }
  this.router.navigate(['login']);
    return false;
  }
}
