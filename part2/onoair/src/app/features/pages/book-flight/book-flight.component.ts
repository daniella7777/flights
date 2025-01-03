import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Flight } from '../../models/flight.model';
import { FlightsService } from '../../services/flights.service';
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
  @Input() flightNumber?: string;
  flight?: Flight;
  error: boolean = false;
  getAirportName = getAirportName;

  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService
  ) {}

  ngOnInit() {
    const routeFlightNumber = this.route.snapshot.paramMap.get('flightNumber');
    const finalFlightNumber = this.flightNumber || routeFlightNumber;
    
    if (finalFlightNumber) {
      this.flight = this.flightsService.getFlight(finalFlightNumber);
      this.error = !this.flight;
    } else {
      this.error = true;
    }
  }
}