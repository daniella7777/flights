import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Reservation } from '../../models/reservation.model';
import { ReservationService } from '../../services/reservation.service';
import { BookFlightComponent } from '../book-flight/book-flight.component';

@Component({
  selector: 'app-reservation-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    BookFlightComponent
  ],
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  reservation?: Reservation;
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService
  ) {}

  ngOnInit() {
    const reservationCode = this.route.snapshot.paramMap.get('reservationCode');
    if (reservationCode) {
      this.reservation = this.reservationService.getReservation(reservationCode);
      this.error = !this.reservation;
    } else {
      this.error = true;
    }
  }
}