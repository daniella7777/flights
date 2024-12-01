import { Flight } from '../classes/flight.js';

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
        // Use Flight class for validation
        new Flight(flightNumber, origin, destination, boardingDate, boardingTime, arrivalDate, arrivalTime, seats);
        alert('Flight added successfully!');
        window.location.href = '../manage-flights/index.html';
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});
