import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Flight } from '../models/flight.model';
import { FlightsService } from '../services/flights/flights.service';

@Component({
  selector: 'app-find-flight',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './find-flight.component.html',
  styleUrls: ['./find-flight.component.css']
})
export class FindFlightComponent implements OnInit {
  futureFlights: Flight[] = [];
  displayedColumns: string[] = [
    'flightNumber',
    'origin',
    'destination',
    'departureDate',
    'departureTime',
    'arrivalDate',
    'arrivalTime',
    'seats',
    'actions'
  ];

  constructor(private flightsService: FlightsService) {}

  ngOnInit() {
    const allFlights = this.flightsService.getFlights();
    const now = new Date();
    this.futureFlights = allFlights.filter(flight => 
      new Date(flight.departureDate) > now
    );
  }

  bookFlight(flight: Flight) {
    console.log('Booking flight:', flight);
  }
}