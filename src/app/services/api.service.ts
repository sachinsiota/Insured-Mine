import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  protected readonly baseUrl: string;

  constructor(protected http: HttpClient,
  ) {
    this.baseUrl = "https://api.github.com/";
  }

  // GET ALL GITHUB USERS
  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "users");
  }
}
