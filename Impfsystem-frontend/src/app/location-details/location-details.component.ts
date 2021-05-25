import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Location  } from "../shared/location";
import { ImpfsystemService } from "../shared/impfsystem.service";
import {ActivatedRoute, Router} from "@angular/router";
import { LocationFactory } from "../shared/location-factory";
import {AuthenticationService} from '../shared/authentication.service';

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
    console.log(this.location.vaccinations);
  }

  removeLocation(){
    if (confirm('Location wirklich löschen?')) {
      this.app.remove(this.location.postal_code)
        .subscribe(res => this.router.navigate(['../'], { relativeTo:
          this.route }));
      }
    }

  attendVaccination(){
    console.log(this.location.vaccinations);
  }

}
