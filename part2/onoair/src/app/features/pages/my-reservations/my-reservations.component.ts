import { Component } from '@angular/core';
import { UpcomingBookingsComponent } from "../../upcoming-bookings/upcoming-bookings.component";
import { PreviousBookingsComponent } from "../../previous-bookings/previous-bookings.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-reservations',
  standalone: true,
  imports: [
    CommonModule,
    UpcomingBookingsComponent,
    PreviousBookingsComponent
  ],
  template: `
    <div class="reservations-container">
      <app-upcoming-bookings></app-upcoming-bookings>
      <app-previous-bookings></app-previous-bookings>
    </div>
  `,
  styles: [`
    .reservations-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  `]
})
export class MyReservationsComponent {}