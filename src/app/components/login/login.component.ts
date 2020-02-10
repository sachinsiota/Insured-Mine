import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CompanyDataService } from 'src/app/data-services/company.data.service';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  rememberMe: boolean = true;

  constructor(public authService: AuthService,
    private router: Router,
    public companyDataService: CompanyDataService,
  ) {
  }

  ngOnInit() {
    if(this.authService.isAuthenticated() === true)
    {
      this.router.navigate(['home']);
    } else {
    this.loginForm = new FormGroup({
    });
  }
  }

  formInitialized(name: string, form: FormGroup) {
    this.loginForm.setControl(name, form);
  }

  onSubmit() {
    if(this.loginForm.valid){
      let email = this.loginForm.get('email.email').value;
      let password = this.loginForm.get('password.password').value;
      let user : User;
      user = this.companyDataService.usersDb.find(user=> user.userId == email);
      if(!user){
        this.companyDataService.openSnackBar("Invalid User or email Id", 3000);
        return false;
      }
      if(user.password != password){
        this.companyDataService.openSnackBar("Password Incorrect", 3000);
        return false;
      }
      if(user.userId == email && user.password == password){
       this.authService.login(user);
       this.companyDataService.currentUser = user;
       this.companyDataService.openSnackBar("Welcome to the home page of Insured Mine "+ user.name, 3000)
       this.router.navigate(['home']);
      }
    }
}
}
