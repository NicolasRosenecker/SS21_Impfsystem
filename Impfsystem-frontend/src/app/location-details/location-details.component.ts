import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Location  } from "../shared/location";
import { ImpfsystemService } from "../shared/impfsystem.service";
import {ActivatedRoute, Router} from "@angular/router";
import { LocationFactory } from "../shared/location-factory";
import { AuthenticationService } from '../shared/authentication.service';
import {User} from '../shared/user';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: []
})
export class LocationDetailsComponent implements OnInit {
  location: Location = LocationFactory.empty();

  constructor(
    private app: ImpfsystemService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.app.getSingle(params['postal_code']).subscribe(l => this.location = l);
  }

  removeLocation(){
    if (confirm('Location wirklich löschen?')) {
      this.app.remove(this.location.postal_code)
        .subscribe(res => this.router.navigate(['../'], { relativeTo:
          this.route }));
      }
    }

  enrollToVaccination($id: number){
    let location: Location = this.location;

    for(let vaccine of this.location.vaccinations){
      if(vaccine.id == $id){
        if(vaccine.participants < vaccine.max_participants){
          vaccine.participants++;
          this.app.updateVaccination(vaccine).subscribe(res => {
            this.router.navigate(['../../locations', location.postal_code], {
              relativeTo: this.route
            });
          });
        } else {
          window.alert("Dieser Termin ist leider bereits ausgebucht.");
        }
      }
    }


    // nicht funktionstüchtig
    let birthdateString = localStorage.getItem("birthdate")!.split("-");
    let birthdate =  new Date(Number(birthdateString[0] ) , Number(birthdateString[1] ), Number(birthdateString[2]));


    let currentUser: User = new User(
      Number(localStorage.getItem("id")),
      localStorage.getItem("firstname")!,
      localStorage.getItem("lastname")!,
      localStorage.getItem("social_security_number")!,
      localStorage.getItem("email")!,
      0,
      new Date(birthdate),
      localStorage.getItem("phone")!,
      localStorage.getItem("gender")!,
    )
    currentUser.is_admin = localStorage.getItem("is_admin") === "true";
    currentUser.is_vaccinated = localStorage.getItem("is_vaccinated") === "true";
    currentUser.vaccination_id = $id;
    this.app.updateUser(currentUser).subscribe();


  }

}
