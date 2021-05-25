import { Component } from '@angular/core';
import {AuthenticationService} from "./shared/authentication.service";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  //location: Location;
  constructor(public authService: AuthenticationService) { }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getLoginLabel(){
    if(this.isLoggedIn()){
      return "Logout";
    } else {
      return "Login";
    }
  }
}
