import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DestinationService } from '../../services/destination.service';
import { Destination } from '../../models/destination.model';

@Component({
  selector: 'app-destination-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-page.component.html',
  styleUrls: ['./destination-page.component.css'],
})
export class DestinationPageComponent implements OnInit {
  destination: Destination | undefined;

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const code = params['code'];
      this.destination = this.destinationService.getDestination(code);
    });
  }
}