import { flights } from '../data/flightData.js';

export class Reservation {
    constructor(flightNumber, passengerCount, passengers) {
        if (!/^[A-Z0-9]{2,6}$/.test(flightNumber)) {
            throw new Error('Invalid flight number.');
        }
        if (typeof passengerCount !== 'number' || passengerCount <= 0) {
            throw new Error('Passenger count must be a positive number.');
        }
        if (!Array.isArray(passengers) || passengers.length !== passengerCount) {
            throw new Error('Passengers must be an array matching the passenger count.');
        }

        passengers.forEach(passenger => {
            if (!passenger.name || !/^[a-zA-Z\s]+$/.test(passenger.name)) {
                throw new Error('Invalid passenger name.');
            }
            if (!/^[A-Z0-9]{6,}$/.test(passenger.passportNumber)) {
                throw new Error('Invalid passport number.');
            }
        });

        // Validate flight capacity
        const flight = flights.find(flight => flight.flightNumber === flightNumber);
        if (!flight) {
            throw new Error('Flight not found.');
        }
        if (passengerCount > flight.seats) {
            throw new Error('Number of passengers exceeds available seats.');
        }

        // Validate unique passport numbers
        const passportNumbers = passengers.map(p => p.passportNumber);
        const uniquePassportNumbers = new Set(passportNumbers);
        if (uniquePassportNumbers.size !== passportNumbers.length) {
            throw new Error('Duplicate passport numbers found in the reservation.');
        }

        this.flightNumber = flightNumber;
        this.passengerCount = passengerCount;
        this.passengers = passengers;
    }
}
