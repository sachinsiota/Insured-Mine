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
// login user

login(user): Observable<any> {
  return this.http.post<any>("https://reqres.in/api/login", user);
}

  // GET ALL GITHUB USERS
  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "users");
  }

  fetchUser(): Observable<any> {
    return this.http.get<any>("https://reqres.in/api/users?page=2");
  }
}
