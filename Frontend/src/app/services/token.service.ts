import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private auth: AuthService) {}
  handle(token) {
    this.set(token);
  }
  set(token) {
    localStorage.setItem('token', token);
  }
  get() {
    return localStorage.getItem('token');
  }
  remove() {
    localStorage.removeItem('token');
  }
  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return payload.iss === this.auth.baseUrl + 'login' ? true : false;
      }
    }
    return false;
  }
  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }
  decode(payload) {
    return JSON.parse(atob(payload));
  }
  loggedIn() {
    return this.isValid();
  }
}
