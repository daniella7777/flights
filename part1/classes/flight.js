import { flights } from '../data/flightData.js'; // Adjust the path to match the location of `flightData.js`

export class Flight {
    constructor(flightNumber, origin, destination, boardingDate, boardingTime, arrivalDate, arrivalTime, seats) {
        // Validate flight number uniqueness
        if (flights.some(flight => flight.flightNumber === flightNumber)) {
            throw new Error(`Flight number ${flightNumber} already exists.`);
        }

        // Parse and validate dates
        const boardingDateObj = this.parseDate(boardingDate);
        const arrivalDateObj = this.parseDate(arrivalDate);

        if (isNaN(boardingDateObj) || isNaN(arrivalDateObj)) {
            throw new Error('Invalid date format. Use dd/mm/yyyy.');
        }

        // Ensure boarding date is before arrival date
        if (boardingDateObj > arrivalDateObj) {
            throw new Error('Boarding date must be before arrival date.');
        }

        // Validate time format
        if (!this.isValidTime(boardingTime)) {
            throw new Error('Invalid boarding time format. Use hh:mm.');
        }
        if (!this.isValidTime(arrivalTime)) {
            throw new Error('Invalid arrival time format. Use hh:mm.');
        }

        // Additional logic for same-day flights
        if (boardingDateObj.getTime() === arrivalDateObj.getTime()) {
            const [boardingHour, boardingMinute] = boardingTime.split(':').map(Number);
            const [arrivalHour, arrivalMinute] = arrivalTime.split(':').map(Number);

            if (boardingHour > arrivalHour || (boardingHour === arrivalHour && boardingMinute >= arrivalMinute)) {
                throw new Error('Boarding time must be before arrival time on the same day.');
            }
        }

        // Validate origin and destination
        if (!/^[A-Z]{3}$/.test(origin) || !/^[A-Z]{3}$/.test(destination)) {
            throw new Error('Invalid origin or destination code.');
        }
        if (origin === destination) {
            throw new Error('Origin and destination must be different.');
        }

        // Validate seats
        if (seats <= 0 || isNaN(seats)) {
            throw new Error('Seats must be a positive number.');
        }

        // Assign properties
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.boardingDate = boardingDate;
        this.boardingTime = boardingTime;
        this.arrivalDate = arrivalDate;
        this.arrivalTime = arrivalTime;
        this.seats = seats;

        // Add the new flight to the `flights` array
        flights.push(this);
    }

    // Helper method to parse dd/mm/yyyy to Date object
    parseDate(dateStr) {
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dateRegex.test(dateStr)) {
            throw new Error('Date must be in dd/mm/yyyy format.');
        }
        const [day, month, year] = dateStr.split('/').map(Number);
        return new Date(year, month - 1, day); // Month is 0-indexed
    }

    // Helper method to validate hh:mm time format
    isValidTime(timeStr) {
        return /^\d{2}:\d{2}$/.test(timeStr) && this.isValidHourMinute(timeStr);
    }

    // Validate hour and minute values
    isValidHourMinute(timeStr) {
        const [hour, minute] = timeStr.split(':').map(Number);
        return hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59;
    }
}
