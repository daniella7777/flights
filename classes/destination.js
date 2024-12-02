import { destinations } from '../data/destinationData.js'; 

export class Destination {
    constructor(code, name, pictureUrl, airportName, airportWebsite, email) {
        // Validate code (3 uppercase letters)
        if (!/^[A-Z]{3}$/.test(code)) {
            throw new Error('Destination code must be 3 uppercase English letters.');
        }

        // Check for unique code
        if (destinations.some(dest => dest.code === code)) {
            throw new Error(`Destination code ${code} already exists.`);
        }

        // Validate name (non-empty string)
        if (typeof name !== 'string' || name.trim() === '') {
            throw new Error('Name is required and cannot be empty.');
        }

        // Validate picture URL
        if (!/^https?:\/\/\S+\.\S+$/.test(pictureUrl)) {
            throw new Error('Invalid picture URL.');
        }

        // Validate airport name (non-empty string)
        if (typeof airportName !== 'string' || airportName.trim() === '') {
            throw new Error('Airport name is required and cannot be empty.');
        }

        // Validate airport website URL
        if (!/^https?:\/\/\S+\.\S+$/.test(airportWebsite)) {
            throw new Error('Invalid airport website URL.');
        }

        // Validate email address
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            throw new Error('Invalid email address.');
        }

        // Assign properties
        this.code = code;
        this.name = name;
        this.pictureUrl = pictureUrl;
        this.airportName = airportName;
        this.airportWebsite = airportWebsite;
        this.email = email;

        // Add the new destination to the `destinations` array
        destinations.push(this);
    }
}
