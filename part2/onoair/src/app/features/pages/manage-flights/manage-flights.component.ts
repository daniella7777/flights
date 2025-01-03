import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { Flight } from '../../models/flight.model';
import { FlightsService } from '../../services/flights.service';
import { Router } from '@angular/router';
import { getAirportName } from '../../../shared/utils';

@Component({
  selector: 'app-manage-flights',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.css']
})
export class ManageFlightsComponent implements OnInit {
  futureFlights: Flight[] = [];
  filteredFlights: Flight[] = [];
  searchCategory: string = 'all';
  searchTerm: string = '';
  searchDate: Date | null = null;
  displayedColumns: string[] = [
    'flightNumber',
    'origin',
    'originName',
    'destination',
    'destinationName',
    'departureDate',
    'departureTime',
    'arrivalDate',
    'arrivalTime',
    'seats',
    'actions'
  ];

  constructor(
    private flightsService: FlightsService,
    private router: Router 
  ) {}

  ngOnInit() {
    const allFlights = this.flightsService.getFlights();
    const now = new Date();
    this.futureFlights = allFlights.filter(flight => 
      new Date(flight.departureDate) > now
    );
    this.filteredFlights = [...this.futureFlights];
  }

  getAirportName(code: string): string {
    return getAirportName(code);
  }

  onCategoryChange() {
    this.searchTerm = '';
    this.searchDate = null;
    if (this.searchCategory === 'all') {
      this.filteredFlights = [...this.futureFlights];
    } else {
      this.applyFilter();
    }
  }

  applyFilter() {
    if (this.searchCategory === 'all') {
      this.filteredFlights = [...this.futureFlights];
      return;
    }

    this.filteredFlights = this.futureFlights.filter(flight => {
      switch (this.searchCategory) {
        case 'destination':
          return flight.destination.toLowerCase().includes(this.searchTerm.toLowerCase());
        case 'origin':
          return flight.origin.toLowerCase().includes(this.searchTerm.toLowerCase());
        case 'departureDate':
          return this.searchDate ? 
            this.isSameDate(new Date(flight.departureDate), this.searchDate) : true;
        case 'arrivalDate':
          return this.searchDate ? 
            this.isSameDate(new Date(flight.arrivalDate), this.searchDate) : true;
        default:
          return true;
      }
    });
  }

  private isSameDate(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  editFlight(flight: Flight, event: Event) {
    event.stopPropagation();  // Prevents row click when clicking the edit icon
    console.log('Edit flight:', flight.flightNumber);
  }

  navigateToFlightPage(flight: Flight) {
    this.router.navigate(['/flight-page', flight.flightNumber]);
  }
}