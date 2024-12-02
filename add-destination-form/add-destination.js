import { Destination } from '../classes/destination.js';

document.getElementById('add-destination-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const code = document.getElementById('code').value.trim();
    const name = document.getElementById('name').value.trim();
    const pictureUrl = document.getElementById('picture-url').value.trim();
    const airportName = document.getElementById('airport-name').value.trim();
    const airportWebsite = document.getElementById('airport-website').value.trim();
    const email = document.getElementById('email').value.trim();

    try {
        const newDestination = new Destination(code, name, pictureUrl, airportName, airportWebsite, email);
        alert(`Destination added successfully!\n\nDetails:\nCode: ${newDestination.code}\nName: ${newDestination.name}\nPicture URL: ${newDestination.pictureUrl}\nAirport Name: ${newDestination.airportName}\nAirport Website: ${newDestination.airportWebsite}\nEmail: ${newDestination.email}`);
        window.location.href = '../manage-destinations/index.html';
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});
