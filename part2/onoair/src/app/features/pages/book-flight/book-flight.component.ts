import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Flight } from '../../models/flight.model';
import { FlightsService } from '../../services/flights/flights.service';
import { getAirportName } from '../../../shared/utils';

@Component({
  selector: 'app-book-flight',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
  flight?: Flight;
  error: boolean = false;
  getAirportName = getAirportName;

  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService
  ) {}

  ngOnInit() {
    const flightNumber = this.route.snapshot.paramMap.get('flightNumber');
    if (flightNumber) {
      this.flight = this.flightsService.getFlight(flightNumber);
      this.error = !this.flight;
    } else {
      this.error = true;
    }
  }
}