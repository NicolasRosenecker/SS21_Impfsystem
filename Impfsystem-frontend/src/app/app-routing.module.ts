import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationDetailsComponent } from "./location-details/location-details.component";
import { LocationListComponent } from "./location-list/location-list.component";
import { HomeComponent } from "./home/home.component";
import {LocationFormComponent} from "./location-form/location-form.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'locations', component: LocationListComponent },
  { path: 'admin', component: LocationFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'locations/:postal_code', component: LocationDetailsComponent },
  { path: 'admin/:postal_code', component: LocationFormComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
