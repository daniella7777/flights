import { destinations } from '../data/destinationData.js';

document.addEventListener('DOMContentLoaded', () => {
    const destinationsTable = document.getElementById('destinations-table');

    const renderDestinationRow = (destination) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${destination.code}</td>
            <td>${destination.name}</td>
            <td>${destination.airportName}</td>
            <td><a href="${destination.airportWebsite}" target="_blank">${destination.airportWebsite}</a></td>
            <td>${destination.email}</td>
            <td><img src="${destination.picture}" alt="${destination.name}" width="100"></td>
        `;
        destinationsTable.appendChild(row);
    };

    destinations.forEach(renderDestinationRow);
});

document.getElementById('add-destination').addEventListener('click', () => {
    window.location.href = '../add-destination-form/add-destination.html';
});
