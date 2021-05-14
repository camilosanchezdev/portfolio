import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthstatusService } from './services/authstatus.service';
import { TokenService } from './services/token.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Camilo Sanchez';
  public loggedIn: boolean;
  constructor(
    private router: Router,
    private authStatus: AuthstatusService,
    private token: TokenService
  ) {}
  ngOnInit(): void {
    this.authStatus.authStatus.subscribe((value) => (this.loggedIn = value));
  }
  logout(e: MouseEvent): void {
    e.preventDefault();
    this.token.remove();
    this.authStatus.changeAuthStatus(true);
    this.router.navigateByUrl('/login');
  }
}
