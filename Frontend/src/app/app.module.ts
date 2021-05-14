import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
// Carousel
import { CarouselModule } from 'ngx-owl-carousel-o';
//import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
// Forms
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Security
import { BeforeloginService } from './services/beforelogin.service';
import { AfterloginService } from './services/afterlogin.service';
// Toastr
import { ToastrModule } from 'ngx-toastr';
// Spinner
import { ProgressSpinnerModule } from 'primeng/progressspinner';
// Recaptcha
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { PortfoliocardComponent } from './components/portfoliocard/portfoliocard.component';
// Modal
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'portfolio/:id',
    component: PortfoliocardComponent,
  },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeloginService],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AfterloginService],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    LoginComponent,
    AdminComponent,
    PortfoliocardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CarouselModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    ProgressSpinnerModule,
    RecaptchaV3Module,
    NgbModalModule,
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: '6LfxRYoaAAAAAPut6ryFw7YgERI42i90ktKGH6GL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
