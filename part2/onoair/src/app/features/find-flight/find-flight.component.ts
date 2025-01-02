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
import { Flight } from '../models/flight.model';
import { FlightsService } from '../services/flights/flights.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-flight',
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
    MatNativeDateModule
  ],
  templateUrl: './find-flight.component.html',
  styleUrls: ['./find-flight.component.css']
})
export class FindFlightComponent implements OnInit {
  futureFlights: Flight[] = [];
  filteredFlights: Flight[] = [];
  searchCategory: string = 'all';
  searchTerm: string = '';
  searchDate: Date | null = null;
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

  onCategoryChange() {
    if (this.searchCategory === 'all') {
      this.searchTerm = '';
      this.searchDate = null;
      this.filteredFlights = [...this.futureFlights];
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

  bookFlight(flight: Flight) {
    this.router.navigate(['/book-flight', flight.flightNumber]);
  }
}