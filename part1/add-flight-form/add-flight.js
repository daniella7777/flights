import { destinations } from '../data/destinationData.js'; // Update the path as necessary
import { Flight } from '../classes/flight.js';

// Function to populate select options with destinations
function populateSelectors() {
    const originSelect = document.getElementById('origin');
    const destinationSelect = document.getElementById('destination');

    // Populate selectors with destinations
    destinations.forEach(destination => {
        const option = document.createElement('option');
        option.value = destination.code; // Set the value to the destination code
        option.textContent = `${destination.name} (${destination.code})`; // Display name and code

        // Append option to both origin and destination selectors
        originSelect.appendChild(option.cloneNode(true));
        destinationSelect.appendChild(option);
    });
}

// Call populateSelectors on page load
document.addEventListener('DOMContentLoaded', populateSelectors);

document.getElementById('add-flight-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const flightNumber = document.getElementById('flight-number').value.trim();
    const origin = document.getElementById('origin').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const boardingDate = document.getElementById('boarding-date').value.trim();
    const arrivalDate = document.getElementById('arrival-date').value.trim();
    const boardingTime = document.getElementById('boarding-time').value.trim();
    const arrivalTime = document.getElementById('arrival-time').value.trim();
    const seats = parseInt(document.getElementById('seats').value, 10);

    try {
        const newFlight = new Flight(flightNumber, origin, destination, boardingDate, boardingTime, arrivalDate, arrivalTime, seats);
        alert(`Flight added successfully!\n\nDetails:\nFlight Number: ${newFlight.flightNumber}\nOrigin: ${newFlight.origin}\nDestination: ${newFlight.destination}\nBoarding: ${newFlight.boardingDate} ${newFlight.boardingTime}\nArrival: ${newFlight.arrivalDate} ${newFlight.arrivalTime}\nSeats: ${newFlight.seats}`);
        window.location.href = '../manage-flights/index.html';
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});
