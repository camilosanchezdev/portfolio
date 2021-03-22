import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { AuthstatusService } from '../../services/authstatus.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    email: '',
    password: '',
  });
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private token: TokenService,
    private router: Router,
    private authStatus: AuthstatusService
  ) {}
  error: any = null;
  ngOnInit(): void {}
  onSubmit() {
    this.auth.login(this.checkoutForm.value).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }
  handleError(error) {
    this.error = error.error.error;
  }
  handleResponse(data) {
    this.token.handle(data.access_token);
    this.authStatus.changeAuthStatus(true);
    this.router.navigateByUrl('/admin');
  }
}
