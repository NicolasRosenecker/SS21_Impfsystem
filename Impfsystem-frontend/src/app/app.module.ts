import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { ImpfsystemService } from "./shared/impfsystem.service";
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LocationFormComponent } from './location-form/location-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from "./shared/authentication.service";
import {TokenInterceptorService} from './shared/token-interceptor.service';
import {JwtInterceptorService} from './shared/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LocationListComponent,
    LocationListItemComponent,
    LocationDetailsComponent,
    HomeComponent,
    LocationFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ImpfsystemService, AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

