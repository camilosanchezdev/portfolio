import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost/portfolio/public/api/auth/';
  constructor(private http: HttpClient) {}

  login(form) {
    return this.http.post(this.baseUrl + 'login', form);
  }
}
