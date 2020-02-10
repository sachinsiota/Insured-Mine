import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../interface/user.interface';


@Injectable({
  providedIn: 'root',
})
export class CompanyDataService {
    constructor(private apiService: ApiService, public snackBar: MatSnackBar){
      let userId = localStorage.getItem("userId");
      if(userId){
        this.currentUser = this.usersDb.find(user=> user.userId == userId);
      }
    }
  usersDb: User[] = [
      {
       userId: 'abc@media.com',
       password: 'abc123',
       name: 'tom'
      },
      {
        userId: 'def@media.com',
        password: 'def123',
        name: 'dick'
       },
  ];
  users = [];
  currentUser:User;
    getAllUsers():Observable<any> {
      return this.apiService.getAllUsers()
      .pipe(map(
        (response) => {
          if(response){
            this.users = response;
       }
    }
      ));
    }

    openSnackBar(message: string, duration: number ) {
        let config = new MatSnackBarConfig();
        config.duration = duration;
        config.verticalPosition = 'top';
        this.snackBar.open(message, 'x', config);
      }
}
