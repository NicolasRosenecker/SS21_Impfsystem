import { Component, OnInit, Input } from '@angular/core';
import { Location } from "../shared/location";

@Component({
  selector: 'a.app-location-list-item',
  templateUrl: './location-list-item.component.html',
  styles: []
})
export class LocationListItemComponent implements OnInit {
  @Input() location: Location;
  constructor() { }

  ngOnInit(): void {
  }

}
