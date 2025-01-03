import { flights } from '../data/flightData.js';
import { Reservation } from '../classes/reservation.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const flightNumber = urlParams.get('flightNumber');

    const flight = flights.find(flight => flight.flightNumber === flightNumber);

    if (flight) {
        const flightSummary = document.getElementById('flight-summary');
        flightSummary.innerHTML = `
            <h2><span class="label">Origin:</span> ${flight.origin}</h2>
            <h2><span class="label">Boarding:</span> ${flight.departureDate} ${flight.departureTime}</h2>
            <h2><span class="label">Destination:</span> ${flight.destination}</h2>
            <h2><span class="label">Landing:</span> ${flight.arrivalDate} ${flight.arrivalTime}</h2>
        `;

        document.getElementById('flight-number').value = flightNumber;
        
        // Set the flight number in the hidden input
        const flightNumberInput = document.getElementById('flight-number');
        flightNumberInput.value = flightNumber; 
    } else {
        alert('No flight selected or flight data is invalid.');
        window.location.href = '../index.html';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const passengerCountInput = document.getElementById('passenger-count');
    const passengerDetailsContainer = document.getElementById('passenger-details');

    passengerCountInput.addEventListener('input', () => {
        passengerDetailsContainer.innerHTML = ''; // Clear existing passenger inputs
        const passengerCount = parseInt(passengerCountInput.value, 10);

        if (!isNaN(passengerCount) && passengerCount > 0) {
            for (let i = 1; i <= passengerCount; i++) {
                const group = document.createElement('div');
                group.classList.add('form-group');
                group.innerHTML = `
                    <label for="passenger-name-${i}">Passenger ${i} Name:</label>
                    <input type="text" id="passenger-name-${i}" name="passengerName[]" placeholder="Full Name" required>
                    <label for="passport-number-${i}">Passenger ${i} Passport Number:</label>
                    <input type="text" id="passport-number-${i}" name="passportNumber[]" placeholder="Passport Number" required>
                `;
                passengerDetailsContainer.appendChild(group);
            }
        }
    });

    document.getElementById('book-flight-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const flightNumber = document.getElementById('flight-number').value.trim();
        const passengerCount = parseInt(document.getElementById('passenger-count').value.trim(), 10);

        const passengers = [];
        for (let i = 1; i <= passengerCount; i++) {
            const name = document.getElementById(`passenger-name-${i}`).value.trim();
            const passportNumber = document.getElementById(`passport-number-${i}`).value.trim();
            passengers.push({ name, passportNumber });
        }

        try {
            // Use Reservation class for validation
            const reservation = new Reservation(flightNumber, passengerCount, passengers);
    
            // Format the reservation details for the alert
            const reservationDetails = `
            Flight Number: ${reservation.flightNumber}
            Number of Passengers: ${reservation.passengerCount}
            Passengers:
            ${reservation.passengers.map((p, i) => `  ${i + 1}. ${p.name} (Passport: ${p.passportNumber})`).join('\n')}
            `;
    
            alert(`Flight booked successfully!\n${reservationDetails}`);
            console.log('Reservation Details:', reservation);
            // Redirect after the success alert
            window.location.href = '../my-bookings/index.html';
    
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    });
});
