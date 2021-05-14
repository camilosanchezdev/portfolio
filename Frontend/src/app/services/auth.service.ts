import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from './general.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = '';
  constructor(
    private http: HttpClient,
    private generalService: GeneralService
  ) {
    this.baseUrl = generalService.baseUrl;
  }

  login(form) {
    return this.http.post(this.baseUrl + 'auth/login', form);
  }
}
