import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Destination } from '../../models/destination.model';
import { DestinationService } from '../../services/destinations/destination.service';
import { getAirportName } from '../../../shared/utils';

@Component({
  selector: 'app-manage-destinations',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './manage-destinations.component.html',
  styleUrls: ['./manage-destinations.component.css']
})
export class ManageDestinationsComponent implements OnInit {
  destinations: Destination[] = [];
  displayedColumns: string[] = [
    'picture',
    'code',
    'name',
    'airportName',
    'airportWebsite',
    'email',
    'actions'
  ];

  constructor(
    private destinationService: DestinationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.destinations = this.destinationService.getDestinations();
  }

  getAirportName(code: string): string {
    return getAirportName(code);
  }

  editDestination(destination: Destination, event: Event) {
    event.stopPropagation();
    console.log('Edit destination:', destination.code);
  }

  navigateToDestinationPage(destination: Destination) {
    this.router.navigate(['/destination-page', destination.code]);
  }
}