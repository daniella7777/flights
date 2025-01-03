export interface Passenger {
    name: string;
    passportNumber: string;
}

export interface Reservation {
    reservationCode: string;
    flightNumber: string;
    numberOfPassengers: number;
    passengers: Passenger[];
}