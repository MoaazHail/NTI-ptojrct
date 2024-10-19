import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { InfoComponent } from './info/info.component';
import { CVComponent } from './cv/cv.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { DataService } from './Service/data.service';
import { MyServicesComponent } from './my-services/my-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    InfoComponent,
    CVComponent,
    FooterComponent,
    NavbarComponent,

    DashboardComponent,
    LogInComponent,
    MyServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [provideHttpClient(),DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
