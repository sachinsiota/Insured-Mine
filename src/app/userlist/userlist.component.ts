import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../data-services/company.data.service';
import { UserList } from '../interface/user.interface';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
userList: UserList[] = [];

  constructor(public companyDataService: CompanyDataService,) { }

  ngOnInit(): void {

    this.companyDataService.fetchUser().subscribe(
      (data)=>{
        if(data) {
          this.userList = data.data;
        }
      }
    );
  }
}
