import { Injectable } from '@angular/core';
import { Flight } from '../../models/flight.model';
import {
    generateDatesForUpcomingWeek,
    generateDatesForFutureAfterWeek,
    generateDatesForPastYear
} from '../../../shared/utils';

@Injectable({
    providedIn: 'root',
})
export class FlightsService {
    private flights: Flight[];

    constructor() {
        // Generate dynamic dates
        const upcomingWeekDates = generateDatesForUpcomingWeek(3);
        const futureDates = generateDatesForFutureAfterWeek(2);
        const pastDates = generateDatesForPastYear(5, 2024);

        // Assign flights with the dynamically generated dates
        this.flights = [
            {
                flightNumber: "W61283",
                origin: "TLV",
                destination: "KRK",
                departureDate: upcomingWeekDates[0].departureDate,
                arrivalDate: upcomingWeekDates[0].arrivalDate,
                seats: 180,
            },
            {
                flightNumber: "LX8396",
                origin: "LCA",
                destination: "ZRH",
                departureDate: upcomingWeekDates[1].departureDate,
                arrivalDate: upcomingWeekDates[1].arrivalDate,
                seats: 150,
            },
            {
                flightNumber: "BA204",
                origin: "LHR",
                destination: "JFK",
                departureDate: upcomingWeekDates[2].departureDate,
                arrivalDate: upcomingWeekDates[2].arrivalDate,
                seats: 250,
            },
            {
                flightNumber: "DL1010",
                origin: "ATL",
                destination: "ORD",
                departureDate: futureDates[0].departureDate,
                arrivalDate: futureDates[0].arrivalDate,
                seats: 190,
            },
            {
                flightNumber: "AF5623",
                origin: "CDG",
                destination: "FCO",
                departureDate: futureDates[1].departureDate,
                arrivalDate: futureDates[1].arrivalDate,
                seats: 200,
            },
            {
                flightNumber: "UA2234",
                origin: "DEN",
                destination: "SFO",
                departureDate: pastDates[0].departureDate,
                arrivalDate: pastDates[0].arrivalDate,
                seats: 170,
            },
            {
                flightNumber: "QF11",
                origin: "SYD",
                destination: "LAX",
                departureDate: pastDates[1].departureDate,
                arrivalDate: pastDates[1].arrivalDate,
                seats: 300,
            },
            {
                flightNumber: "EK215",
                origin: "DXB",
                destination: "LAX",
                departureDate: pastDates[2].departureDate,
                arrivalDate: pastDates[2].arrivalDate,
                seats: 350,
            },
            {
                flightNumber: "LH400",
                origin: "FRA",
                destination: "JFK",
                departureDate: pastDates[3].departureDate,
                arrivalDate: pastDates[3].arrivalDate,
                seats: 280,
            },
            {
                flightNumber: "NH7",
                origin: "NRT",
                destination: "SEA",
                departureDate: pastDates[4].departureDate,
                arrivalDate: pastDates[4].arrivalDate,
                seats: 240,
            },
        ];
    }

    getFlights(): Flight[] {
        return this.flights;
    }

    getFlight(flightNumber: string): Flight | undefined {
        return this.flights.find(flight => flight.flightNumber === flightNumber);
      }
}
