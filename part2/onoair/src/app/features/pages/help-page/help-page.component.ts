import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css'],
})
export class HelpPageComponent {}
