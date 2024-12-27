import { reservations } from '../data/reservationData.js';
import { destinations } from '../data/destinationData.js';
import { flights } from '../data/flightData.js';

document.addEventListener('DOMContentLoaded', () => {
    const bookingsContainer = document.getElementById('bookings-container');

    if (!bookingsContainer) {
        console.error('Could not find bookings container element');
        return;
    }

    const renderBooking = (reservation) => {
        const flight = flights.find(f => f.flightNumber === reservation.flightNumber);
        const destination = destinations.find(dest => dest.code === flight.destination);

        if (!flight || !destination) {
            console.error('Flight or destination data missing');
            return;
        }

        const bookingCard = document.createElement('div');
        bookingCard.className = 'booking-card';

        bookingCard.innerHTML = `
            <div class="booking-image">
                <img src="${destination.picture}" alt="${destination.name}">
            </div>
            <div class="booking-details">
                <p><strong>Origin:</strong> ${flight.origin} <strong>Boarding:</strong> ${flight.departureDate} ${flight.departureTime}</p>
                <p><strong>Destination:</strong> ${flight.destination} <strong>Landing:</strong> ${flight.arrivalDate} ${flight.arrivalTime}</p>
                <p><strong>No. of passengers:</strong> ${reservation.passengerCount}</p>
            </div>
        `;

        bookingsContainer.appendChild(bookingCard);
    };

    if (reservations && reservations.length > 0) {
        reservations.forEach(renderBooking);
    } else {
        bookingsContainer.innerHTML = '<p>No bookings found.</p>';
    }
});
