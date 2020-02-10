import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CompanyDataService } from './data-services/company.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {

  constructor(public authService: AuthService, public cdRef:ChangeDetectorRef, public companyDataService: CompanyDataService){}

  ngAfterViewChecked() {
     this.cdRef.detectChanges();
     this.cdRef.markForCheck();
  }

  ngOnInit() {
  }

}
