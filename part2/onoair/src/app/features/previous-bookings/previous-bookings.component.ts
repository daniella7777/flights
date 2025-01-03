import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
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
  selector: 'app-previous-bookings',
  templateUrl: './previous-bookings.component.html',
  styleUrls: ['./previous-bookings.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PreviousBookingsComponent implements OnInit {
  previousBookings: BookingDisplay[] = [];

  constructor(
    private router: Router,
    private reservationService: ReservationService,
    private flightsService: FlightsService,
    private destinationService: DestinationService,
    private identityService: IdentityService
  ) {}

  ngOnInit() {
    this.loadPreviousBookings();
  }

  viewReservationDetails(reservationCode: string) {
    this.router.navigate(['reservation-details', reservationCode]);
  }

  private loadPreviousBookings() {
    const currentUser = this.identityService.getCurrentUser();
    const now = new Date();
    
    const allReservations = this.reservationService.getReservations();
    
    const userReservations = allReservations.filter(reservation => {
      const hasUser = reservation.passengers.some(
        passenger => passenger.passportNumber === currentUser.passportNumber
      );
      const flight = this.flightsService.getFlight(reservation.flightNumber);
      const isPastFlight = flight ? new Date(flight.departureDate) < now : false;
      
      return hasUser && isPastFlight;
    });

    this.previousBookings = userReservations.map(reservation => {
      const flight = this.flightsService.getFlight(reservation.flightNumber)!;
      const destination = this.destinationService.getDestination(flight.destination)!;
      
      return {
        reservation,
        flight,
        destination
      };
    }).sort((a, b) => 
      new Date(b.flight.departureDate).getTime() - new Date(a.flight.departureDate).getTime()
    );
  }
}