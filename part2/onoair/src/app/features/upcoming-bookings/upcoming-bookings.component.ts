import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { FlightsService } from '../services/flights.service';
import { DestinationService } from '../services/destination.service';
import { IdentityService } from '../services/identity.service';
import { Reservation } from '../models/reservation.model';
import { Flight } from '../models/flight.model';
import { Destination } from '../models/destination.model';

interface BookingDisplay {
  reservation: Reservation;
  flight: Flight;
  destination: Destination;
}

@Component({
  selector: 'app-upcoming-bookings',
  templateUrl: './upcoming-bookings.component.html',
  styleUrls: ['./upcoming-bookings.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class UpcomingBookingsComponent implements OnInit {
  upcomingBookings: BookingDisplay[] = [];

  constructor(
    private reservationService: ReservationService,
    private flightsService: FlightsService,
    private destinationService: DestinationService,
    private identityService: IdentityService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUpcomingBookings();
  }

  private loadUpcomingBookings() {
    const currentUser = this.identityService.getCurrentUser();
    const now = new Date();
    
    const allReservations = this.reservationService.getReservations();
    
    const userReservations = allReservations.filter(reservation => {
      const hasUser = reservation.passengers.some(
        passenger => passenger.passportNumber === currentUser.passportNumber
      );
      const flight = this.flightsService.getFlight(reservation.flightNumber);
      const isFutureFlight = flight ? new Date(flight.departureDate) > now : false;
      
      return hasUser && isFutureFlight;
    });

    this.upcomingBookings = userReservations.map(reservation => {
      const flight = this.flightsService.getFlight(reservation.flightNumber)!;
      const destination = this.destinationService.getDestination(flight.destination)!;
      
      return {
        reservation,
        flight,
        destination
      };
    }).sort((a, b) => 
      new Date(a.flight.departureDate).getTime() - new Date(b.flight.departureDate).getTime()
    );
  }

  viewReservationDetails(reservation: Reservation) {
    this.router.navigate(['/reservation-details', reservation.reservationCode]);
  }
}