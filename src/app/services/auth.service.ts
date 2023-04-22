import { Injectable } from "@angular/core";
import { CompanyDataService } from '../data-services/company.data.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;

  constructor(private companyDataService: CompanyDataService, public snackBar: MatSnackBar, public apiService: ApiService, public router: Router) {
    // if (localStorage.getItem("loggedIn")) {
    //   this.loggedIn = true;
    // }
    // this.isAuthenticated();
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  login(user): Observable<any> {
    return this.apiService.login(user)
      .pipe(map(
        (response) => {
          if(response && response.token){
          this.loggedIn = true;
          this.openSnackBar("User has been logged in", 2000);
          this.router.navigateByUrl("userlist");
          }
        }
      ));
  }

  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    config.duration = duration;
    config.verticalPosition = 'top';
    this.snackBar.open(message, 'x', config);
  }

  // login(user) {
  //   localStorage.setItem("userId", user.userId);
  //   localStorage.setItem("loggedIn", 'true');
  //   this.loggedIn = true;
  // }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userId");
    this.companyDataService.currentUser = null;
  }

}
