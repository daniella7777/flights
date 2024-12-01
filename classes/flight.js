export class Flight {
    constructor(flightNumber, origin, destination, departureDate, departureTime, arrivalDate, arrivalTime, seats) {
        // Validate input
        if (!/^[A-Z]{2}\d{3,4}$/.test(flightNumber)) throw new Error('Invalid flight number format.');
        if (!/^[A-Z]{3}$/.test(origin)) throw new Error('Invalid origin code.');
        if (!/^[A-Z]{3}$/.test(destination)) throw new Error('Invalid destination code.');
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(departureDate)) throw new Error('Invalid departure date format (dd/mm/yyyy).');
        if (!/^\d{2}:\d{2}$/.test(departureTime)) throw new Error('Invalid departure time format (hh:mm).');
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(arrivalDate)) throw new Error('Invalid arrival date format (dd/mm/yyyy).');
        if (!/^\d{2}:\d{2}$/.test(arrivalTime)) throw new Error('Invalid arrival time format (hh:mm).');
        if (seats <= 0) throw new Error('Seats must be a positive number.');

        // Assign properties
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureDate = departureDate;
        this.departureTime = departureTime;
        this.arrivalDate = arrivalDate;
        this.arrivalTime = arrivalTime;
        this.seats = seats;
    }
}
