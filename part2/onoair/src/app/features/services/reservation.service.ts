import { Injectable } from '@angular/core';
import { Reservation, Passenger } from '../models/reservation.model';
import { FlightsService } from './flights.service';

@Injectable({
    providedIn: 'root',
})
export class ReservationService {
    private reservations: Reservation[];

    constructor(private flightsService: FlightsService) {
        this.reservations = [
            {
                reservationCode: 'RES001',
                flightNumber: 'W61283',
                numberOfPassengers: 3,
                passengers: [
                    { name: 'John Smith', passportNumber: 'AB123456' },
                    { name: 'Emma Smith', passportNumber: 'CD789012' },
                    { name: 'Neville Longbottom', passportNumber: 'CT789012' }

                ]
            },
            {
                reservationCode: 'RES011',
                flightNumber: 'W61283',
                numberOfPassengers: 3,
                passengers: [
                    { name: 'Harry Potter', passportNumber: 'AB654321' },
                    { name: 'Ron Weasley', passportNumber: 'CD210987' },
                    { name: 'Hermione Granger', passportNumber: 'TF210987' }
                    
                ]
            },
            {
                reservationCode: 'RES002',
                flightNumber: 'LX8396',
                numberOfPassengers: 1,
                passengers: [
                    { name: 'Michael Brown', passportNumber: 'EF345678' }
                ]
            },
            {
                reservationCode: 'RES022',
                flightNumber: 'LX8396',
                numberOfPassengers: 3,
                passengers: [
                    { name: 'Remus Lupin', passportNumber: 'EF332178' },
                    { name: 'Nymphadora Tonks', passportNumber: 'GV332228' },
                    { name: 'Neville Longbottom', passportNumber: 'CT789012' }
                ]
            },
            {
                reservationCode: 'RES003',
                flightNumber: 'BA204',
                numberOfPassengers: 4,
                passengers: [
                    { name: 'David Wilson', passportNumber: 'GH901234' },
                    { name: 'Sarah Wilson', passportNumber: 'IJ567890' },
                    { name: 'Lucy Wilson', passportNumber: 'KL123456' },
                    { name: 'Lucy Wilson', passportNumber: 'KL123456' }
                ]
            },
            {
                reservationCode: 'RES013',
                flightNumber: 'BA204',
                numberOfPassengers: 1,
                passengers: [
                    { name: 'David Tennet', passportNumber: 'GH904321' },
                ]
            },
            {
                reservationCode: 'RES004',
                flightNumber: 'DL1010',
                numberOfPassengers: 2,
                passengers: [
                    { name: 'Robert Taylor', passportNumber: 'MN789012' },
                    { name: 'Patricia Taylor', passportNumber: 'OP345678' }
                ]
            },
            {
                reservationCode: 'RES014',
                flightNumber: 'DL1010',
                numberOfPassengers: 3,
                passengers: [
                    { name: 'Albus Percival Wulfric Brian Dumbledore', passportNumber: 'MN111111' },
                    { name: 'Minerva McGonagall', passportNumber: 'EF332178' },
                    { name: 'Neville Longbottom', passportNumber: 'CT789012' },
                ]
            },
            {
                reservationCode: 'RES005',
                flightNumber: 'AF5623',
                numberOfPassengers: 1,
                passengers: [
                    { name: 'James Anderson', passportNumber: 'QR901234' }
                ]
            },
            {
                reservationCode: 'RES006',
                flightNumber: 'UA2234',
                numberOfPassengers: 4,
                passengers: [
                    { name: 'Thomas Martinez', passportNumber: 'ST567890' },
                    { name: 'Maria Martinez', passportNumber: 'UV123456' },
                    { name: 'Sofia Martinez', passportNumber: 'WX789012' },
                    { name: 'Lucas Martinez', passportNumber: 'YZ345678' }
                ]
            },
            {
                reservationCode: 'RES007',
                flightNumber: 'QF11',
                numberOfPassengers: 3,
                passengers: [
                    { name: 'William Johnson', passportNumber: 'AA901234' },
                    { name: 'Elizabeth Johnson', passportNumber: 'BB567890' },
                    { name: 'Neville Longbottom', passportNumber: 'CT789012' },
                ]
            },
            {
                reservationCode: 'RES017',
                flightNumber: 'QF11',
                numberOfPassengers: 3,
                passengers: [
                    { name: 'Draco Malfoy', passportNumber: 'AA454545' },
                    { name: 'Lucius Malfoy', passportNumber: 'BB303450' },
                    { name: 'Narcissa Malfoy', passportNumber: 'BO303477' }

                ]
            },
            {
                reservationCode: 'RES008',
                flightNumber: 'EK215',
                numberOfPassengers: 3,
                passengers: [
                    { name: 'Daniel Lee', passportNumber: 'CC123456' },
                    { name: 'Sophie Lee', passportNumber: 'DD789012' },
                    { name: 'Oliver Lee', passportNumber: 'EE345678' }
                ]
            },
            {
                reservationCode: 'RES009',
                flightNumber: 'LH400',
                numberOfPassengers: 1,
                passengers: [
                    { name: 'Christopher Davis', passportNumber: 'FF901234' }
                ]
            },
            {
                reservationCode: 'RES010',
                flightNumber: 'NH7',
                numberOfPassengers: 2,
                passengers: [
                    { name: 'Andrew Wilson', passportNumber: 'GG567890' },
                    { name: 'Isabella Wilson', passportNumber: 'HH123456' }
                ]
            }
        ];
    }

    getReservations(): Reservation[] {
        return this.reservations;
    }

    getReservation(reservationCode: string): Reservation | undefined {
        return this.reservations.find(reservation => reservation.reservationCode === reservationCode);
    }

    getReservationsByFlight(flightNumber: string): Reservation[] {
        return this.reservations.filter(reservation => reservation.flightNumber === flightNumber);
    }

    getReservationsByPassengerName(name: string): Reservation[] {
        return this.reservations.filter(reservation => 
            reservation.passengers.some(passenger => 
                passenger.name.toLowerCase().includes(name.toLowerCase())
            )
        );
    }
}