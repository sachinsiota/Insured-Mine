import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  disableLogout: boolean = false;
  constructor(public authService: AuthService, private router: Router) { }
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.disableLogout = true;
      this.authService.logout();
      this.router.navigate(['home']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
