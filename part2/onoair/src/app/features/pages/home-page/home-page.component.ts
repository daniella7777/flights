import { Component } from '@angular/core';
import { LastMinuteFlightsComponent } from '../../last-minute-flights/last-minute-flights.component';
import { FindFlightComponent } from '../../find-flight/find-flight.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LastMinuteFlightsComponent, FindFlightComponent],
  template: `
    <app-last-minute-flights></app-last-minute-flights>
    <app-find-flight></app-find-flight>
  `
})
export class HomePageComponent {}