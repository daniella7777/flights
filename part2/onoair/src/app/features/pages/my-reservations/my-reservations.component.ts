import { Component } from '@angular/core';
import { UpcomingBookingsComponent } from "../../upcoming-bookings/upcoming-bookings.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-reservations',
  standalone: true,
  imports: [
    CommonModule,
    UpcomingBookingsComponent
  ],
  template: '<app-upcoming-bookings></app-upcoming-bookings>',
  styleUrl: './my-reservations.component.css'
})
export class MyReservationsComponent {}