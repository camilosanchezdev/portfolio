import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './modules/components/contact/contact.component';
import { ResumeComponent } from './modules/components/resume/resume.component';
import { PortfolioComponent } from './modules/components/portfolio/portfolio.component';
import { ServicesComponent } from './modules/components/services/services.component';
import { AboutComponent } from './modules/components/about/about.component';
const routes = [{ path: '', component: HomeComponent }];
@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, ResumeComponent, PortfolioComponent, ServicesComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
