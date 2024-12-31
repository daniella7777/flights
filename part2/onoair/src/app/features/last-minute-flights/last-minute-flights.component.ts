import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { FlightsService } from '../services/flights/flights.service';
import { DestinationService } from '../services/destinations/destination.service';
import { Flight } from '../models/flight.model';
import { Destination } from '../models/destination.model';

@Component({
  selector: 'app-last-minute-flights',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './last-minute-flights.component.html',
  styleUrls: ['./last-minute-flights.component.css']
})
export class LastMinuteFlightsComponent implements OnInit {
  lastMinuteFlights: Flight[] = [];
  destinations: Map<string, Destination> = new Map();

  constructor(
    private flightsService: FlightsService,
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {
    this.loadDestinations();
    this.loadLastMinuteFlights();
  }

  private loadDestinations(): void {
    this.destinationService.getDestinations().forEach(destination => {
      this.destinations.set(destination.code, destination);
    });
  }

  private loadLastMinuteFlights(): void {
    const allFlights = this.flightsService.getFlights();
    const currentDate = new Date();
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(currentDate.getDate() + 7);

    this.lastMinuteFlights = allFlights.filter(flight => {
      const flightDate = new Date(flight.departureDate);
      return flightDate >= currentDate && flightDate <= oneWeekFromNow;
    });
  }

  getDestinationImage(destinationCode: string): string {
    return this.destinations.get(destinationCode)?.picture || '/api/placeholder/400/320';
  }

  getDestinationName(destinationCode: string): string {
    return this.destinations.get(destinationCode)?.name || destinationCode;
  }
}