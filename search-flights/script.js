import { flights } from '../data/flightData.js';

document.addEventListener('DOMContentLoaded', () => {
    const originSelect = document.getElementById('origin-select');
    const destinationSelect = document.getElementById('destination-select');
    const flightsTable = document.getElementById('search-flights-table');

    // Helper function to get unique values for a given key
    const uniqueValues = (key) => [...new Set(flights.map(flight => flight[key]))];

    // Populate a select dropdown with options
    const populateSelect = (selectElement, values) => {
        values.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            selectElement.appendChild(option);
        });
    };

    // Render a row in the table
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
            <td><button class="book-btn">Book</button></td>
        `;
        flightsTable.appendChild(row);
    };

    // Filter and display flights based on selected origin and destination
    const filterFlights = () => {
        const origin = originSelect.value;
        const destination = destinationSelect.value;

        flightsTable.innerHTML = ''; // Clear the table

        flights
            .filter(flight => 
                (origin === '' || flight.origin === origin) && 
                (destination === '' || flight.destination === destination)
            )
            .forEach(renderFlightRow);
    };

    // Populate origin and destination dropdowns
    populateSelect(originSelect, uniqueValues('origin'));
    populateSelect(destinationSelect, uniqueValues('destination'));

    // Add event listeners to the dropdowns
    originSelect.addEventListener('change', filterFlights);
    destinationSelect.addEventListener('change', filterFlights);

    // Render all flights initially
    filterFlights();
});
