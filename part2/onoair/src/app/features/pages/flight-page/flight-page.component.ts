import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FlightsService } from '../../services/flights.service';
import { Flight } from '../../models/flight.model';
import { getAirportName } from '../../../shared/utils';

@Component({
  selector: 'app-flight-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-page.component.html',
  styleUrls: ['./flight-page.component.css'],
})
export class FlightPageComponent implements OnInit {
  flight: Flight | undefined;

  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const flightNumber = params['flightNumber'];
      this.flight = this.flightsService.getFlight(flightNumber);
    });
  }

  getAirportName(code: string): string {
    return getAirportName(code);
  }
}