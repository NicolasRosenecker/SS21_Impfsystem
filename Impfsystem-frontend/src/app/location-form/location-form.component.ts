import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from "@angular/forms";
import { LocationFormErrorMessages } from "./location-form-error-messages";
import { LocationFactory } from "../shared/location-factory";
import { ImpfsystemService } from "../shared/impfsystem.service";
import { Location, Vaccination } from "../shared/location";



@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})

export class LocationFormComponent implements OnInit {
  locationForm: FormGroup;
  location = LocationFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingLocation = false;
  vaccinations: FormArray;

  constructor(
    private fb: FormBuilder,
    private app: ImpfsystemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const postal_code = this.route.snapshot.params["postal_code"];
    if (postal_code) {
      this.isUpdatingLocation = true;
      this.app.getSingle(postal_code).subscribe(location => {
        this.location = location;
        this.initLocation();
      });
    }
    this.initLocation();
  }

  initLocation() {
    this.buildVaccinationsArray();
    this.locationForm = this.fb.group({
      id: this.location.id,
      postal_code: [
        this.location.postal_code,[
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4)
        ]
      ],
      location_name: [this.location.location_name, Validators.required],
      location_address: [this.location.location_address, Validators.required],
      location_description: this.location.location_description,
      vaccinations: this.vaccinations
    });
    this.locationForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  buildVaccinationsArray() {
    this.vaccinations = this.fb.array([]);

    for (let vac of this.location.vaccinations) {
      let fg = this.fb.group({
         id: new FormControl(vac.id),
         vaccination_date: new FormControl(vac.vaccination_date, [Validators.required]),
         vaccination_name: new FormControl(vac.vaccination_name, [Validators.required]),
         max_participants: new FormControl(vac.max_participants, [Validators.required])
      });
      this.vaccinations.push(fg);
    }
  }

  addVaccinationControl() {
    console.log(this.vaccinations);
    this.vaccinations.push(this.fb.group({
      id: null, // get next available id
      vaccination_date: null,
      vaccination_name: null,
      max_participants: null,
    }));
  }


  submitForm() {
    const location: Location = LocationFactory.fromObject(this.locationForm.value);
    location.vaccinations = this.locationForm.value.vaccinations;
    if (this.isUpdatingLocation) {
      this.app.update(location).subscribe(res => {
        this.router.navigate(['../../locations', location.postal_code], {
          relativeTo: this.route
        });
      });
    } else {
      this.app.create(location).subscribe(res => {
        this.location = LocationFactory.empty();
        this.locationForm.reset(LocationFactory.empty());
        this.router.navigate(['../locations'], {
          relativeTo: this.route
        });
      })
    }
  }

  updateErrorMessages(){
    this.errors = {};
    for (const message of LocationFormErrorMessages) {
      const control = this.locationForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid &&
        control.errors![message.forValidator] &&
        !this.errors[message.forControl] // supress "possibly null" error message
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

}
