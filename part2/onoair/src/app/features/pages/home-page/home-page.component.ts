import { Component } from '@angular/core';
import { LastMinuteFlightsComponent } from '../../last-minute-flights/last-minute-flights.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LastMinuteFlightsComponent],
  template: `
    <app-last-minute-flights></app-last-minute-flights>
    <!-- FindFlight component will be added here later -->
  `
})
export class HomePageComponent {}