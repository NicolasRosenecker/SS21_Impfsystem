import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="ui container">
      <h1>Home</h1>
      <p>Das ist das KWM Impfsystem.</p>
      <a routerLink="../locations" class="ui red button">
        Locations ansehen
      </a>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
