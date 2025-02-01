import { Routes } from '@angular/router';
import { HelpPageComponent } from './features/pages/help-page/help-page.component';
import { HomePageComponent } from './features/pages/home-page/home-page.component';
import { BookFlightComponent } from './features/pages/book-flight/book-flight.component';
import { BookFlightsPageComponent } from './features/pages/book-flights-page/book-flights-page.component';
import { ManageFlightsComponent } from './features/pages/manage-flights/manage-flights.component';
import { FlightPageComponent } from './features/pages/flight-page/flight-page.component';
import { ManageDestinationsComponent } from './features/pages/manage-destinations/manage-destinations.component';
import { DestinationPageComponent } from './features/pages/destination-page/destination-page.component';
import { MyReservationsComponent } from './features/pages/my-reservations/my-reservations.component';
import { UpcomingBookingsComponent } from './features/upcoming-bookings/upcoming-bookings.component';
import { ReservationDetailsComponent } from './features/pages/reservation-details/reservation-details.component';

export const routes: Routes = [
    { path: 'help', component: HelpPageComponent },
    { path: "", component: HomePageComponent},
    { path: 'book-flight/:flightNumber',component: BookFlightComponent},
    { path: 'book-flights-page' , component: BookFlightsPageComponent},
    { path: 'manage-flights' , component: ManageFlightsComponent},
    { path: 'flight-page/:flightNumber', component: FlightPageComponent },
    { path: 'manage-destinations', component: ManageDestinationsComponent},
    { path: 'destination-page/:code', component: DestinationPageComponent},
    { path: 'my-bookings', component: MyReservationsComponent},
    { path: 'reservation-details/:reservationCode', component: ReservationDetailsComponent}
];
