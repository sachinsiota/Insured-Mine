import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from "@angular/router";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //return this.authService.isAuthenticated()
    if(this.authService.isAuthenticated() === true) {
      return true;
  }
    else {
          this.router.navigate(['/login']);
          return false;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                return this.canActivate(route, state);
              }
}
