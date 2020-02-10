import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CompanyDataService } from 'src/app/data-services/company.data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  ngOnInit() {
    this.getAllUsers();
  }
  users = [];
  constructor(public companyDataService: CompanyDataService) { }

  getAllUsers() {
    this.companyDataService.getAllUsers()
      .subscribe();

  }

}
