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
        
        // Add click event to the "Book" button
        row.querySelector('.book-btn').addEventListener('click', () => {
            // Redirect to book-flight.html with query parameters
            window.location.href = `../book-flight-form/book-flight.html?flightNumber=${flight.flightNumber}`;
        });
        flightsTable.appendChild(row);
    };

    // Parse date string in dd/mm/yyyy format to a JavaScript Date object
    const parseDate = (dateStr) => {
        const [day, month, year] = dateStr.split('/').map(Number);
        return new Date(year, month - 1, day); // JavaScript months are 0-indexed
    };

    // Filter and display flights based on selected origin and destination
    const filterFlights = () => {
        const origin = originSelect.value;
        const destination = destinationSelect.value;

        flightsTable.innerHTML = ''; // Clear the table

        // Filter flights based on selected criteria
        const filteredFlights = flights.filter(flight => 
            (origin === '' || flight.origin === origin) && 
            (destination === '' || flight.destination === destination)
        );

        if (filteredFlights.length === 0) {
            // Show an alert if no flights are found
            alert('No flights match the selected filters.');
            return;
        }

        // Sort flights by departure date and time
        const sortedFlights = filteredFlights.sort((a, b) => {
            const dateA = parseDate(a.departureDate);
            const dateB = parseDate(b.departureDate);

            // Compare departure dates first
            if (dateA.getTime() !== dateB.getTime()) {
                return dateA - dateB;
            }

            // If dates are the same, compare times
            const timeA = a.departureTime.split(':').map(Number);
            const timeB = b.departureTime.split(':').map(Number);
            const timeValueA = timeA[0] * 60 + timeA[1]; // Convert hours and minutes to minutes
            const timeValueB = timeB[0] * 60 + timeB[1];
            return timeValueA - timeValueB;
        });

        // Render the sorted flights
        sortedFlights.forEach(renderFlightRow);
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
