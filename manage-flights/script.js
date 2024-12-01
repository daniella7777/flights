import { flights } from '../data/flightData.js';

document.addEventListener('DOMContentLoaded', () => {
    const flightsTable = document.getElementById('flights-table');
    const renderFlightRow = (flight) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${flight.flightNumber}</td>
            <td>${flight.origin}</td>
            <td>${flight.destination}</td>
            <td>${flight.departureDate}</td>
            <td>${flight.departureTime}</td>
            <td>${flight.arrivalDate}</td>
            <td>${flight.arrivalTime}</td>
            <td>${flight.seats}</td>
        `;
        flightsTable.appendChild(row);
    };

    flights.forEach(renderFlightRow);
});
