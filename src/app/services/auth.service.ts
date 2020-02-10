import { Injectable } from "@angular/core";
import { CompanyDataService } from '../data-services/company.data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;
  //sessionLoggedIn: boolean = false;

  constructor(private companyDataService: CompanyDataService) {
    if(localStorage.getItem("loggedIn")){
      this.loggedIn = true;
    }
  this.isAuthenticated();
  }

  isAuthenticated(): boolean {
  return this.loggedIn;
}

login(user) {
  localStorage.setItem("userId", user.userId);
  localStorage.setItem("loggedIn", 'true');
  this.loggedIn = true;
}

logout() {
  this.loggedIn = false;
  //localStorage.clear();
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("userId");
  this.companyDataService.currentUser = null;
}

}
