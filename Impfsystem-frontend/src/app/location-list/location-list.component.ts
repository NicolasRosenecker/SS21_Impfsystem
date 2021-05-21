import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location, Vaccination } from "../shared/location";
import {ImpfsystemService} from "../shared/impfsystem.service";

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: []
})

export class LocationListComponent implements OnInit {

  locations: Location[];
  @Output() showDetailsEvent = new EventEmitter<Location>();

  constructor(private app:ImpfsystemService) { }

  ngOnInit() {
    this.app.getAll().subscribe(res => this.locations = res);
  }


}


