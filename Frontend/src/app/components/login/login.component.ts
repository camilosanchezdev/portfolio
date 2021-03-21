import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    username: '',
    password: '',
  });
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  error: any = null;
  ngOnInit(): void {}
  onSubmit() {
    return this.http
      .post(
        'http://localhost/portfolio/public/api/login',
        this.checkoutForm.value
      )
      .subscribe(
        (data) => console.log(data),
        (error) => this.handleError(error)
      );
  }
  handleError(error) {
    this.error = error.error.error;
  }
}
