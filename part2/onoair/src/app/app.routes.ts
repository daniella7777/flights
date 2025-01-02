import { Routes } from '@angular/router';
import { HelpPageComponent } from './features/pages/help-page/help-page.component';
import { HomePageComponent } from './features/pages/home-page/home-page.component';
import { BookFlightComponent } from './features/pages/book-flight/book-flight.component';
import { BookFlightsPageComponent } from './features/pages/book-flights-page/book-flights-page.component';

export const routes: Routes = [
    { path: 'help', component: HelpPageComponent },
    { path: "", component: HomePageComponent},
    { path: 'book-flight/:flightNumber',component: BookFlightComponent},
    { path: 'book-flights-page' , component: BookFlightsPageComponent}
];
