import { Injectable } from '@angular/core';
import { Destination } from '../../models/destination.model';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  private destinations: Destination[] = [
    {
      code: 'JFK',
      name: 'New York City',
      airportName: 'John F. Kennedy International Airport',
      airportWebsite: 'https://www.jfkairport.com',
      email: 'info@jfkairport.com',
      picture: 'https://media.istockphoto.com/id/525232662/photo/new-york-empire-state-building-and-statue-of-liberty.jpg?s=612x612&w=0&k=20&c=Ms_4rncOiyHJcXmLdFHw0RSBjbPhwvhz2gGJ4tEI25I=',
    },
    {
      code: 'NRT',
      name: 'Tokyo',
      airportName: 'Narita International Airport',
      airportWebsite: 'https://www.narita-airport.jp',
      email: 'info@narita-airport.jp',
      picture: 'https://media.istockphoto.com/id/484915982/photo/akihabara-tokyo.jpg?s=612x612&w=0&k=20&c=kbCRYJS5vZuF4jLB3y4-apNebcCEkWnDbKPpxXdf9Cg=',
    },
    {
      code: 'CDG',
      name: 'Paris',
      airportName: 'Charles de Gaulle Airport',
      airportWebsite: 'https://www.parisaeroport.fr',
      email: 'contact@parisaeroport.fr',
      picture: 'https://media.istockphoto.com/id/1364380431/photo/the-eiffel-tower-from-the-river-seine-in-paris.jpg?s=612x612&w=0&k=20&c=XgeWO_B-gfuHU_fulflMN40VbhvxtTMvEEFA4tshilI=',
    },
    {
      code: 'KRK',
      name: 'Krakow',
      airportName: 'John Paul II International Airport Kraków-Balice',
      airportWebsite: 'https://www.krakowairport.pl',
      email: 'info@krakowairport.pl',
      picture: 'https://media.istockphoto.com/id/629579636/photo/krakow-at-sunrise-poland.jpg?s=612x612&w=0&k=20&c=jQubcAHpOelhb83HWi_cBhAngZ-W2jLMHl0pLKtp18Q=',
    },
    {
      code: 'ZRH',
      name: 'Zurich',
      airportName: 'Zurich Airport',
      airportWebsite: 'https://www.zurich-airport.com',
      email: 'info@zurich-airport.com',
      picture: 'https://media.istockphoto.com/id/518594550/photo/historic-city-of-zurich-with-river-limmat-switzerland.jpg?s=612x612&w=0&k=20&c=xCn_2Jxutc00jcz3StKDn7dfNteD8PLshtaCtvBgAT0=',
    },
    {
      code: 'ORD',
      name: 'Chicago',
      airportName: "O'Hare International Airport",
      airportWebsite: 'https://www.flychicago.com',
      email: 'info@flychicago.com',
      picture: 'https://media.istockphoto.com/id/1694393531/photo/downtown-skyline-chicago-illinois-dramatic-sunset.jpg?s=612x612&w=0&k=20&c=tqM7ZZaxa8zBF1gYLlrXdHs3q4ucHXu3g_b2owXf19U=',
    },
    {
      code: 'FCO',
      name: 'Rome',
      airportName: 'Leonardo da Vinci–Fiumicino Airport',
      airportWebsite: 'https://www.adr.it',
      email: 'info@adr.it',
      picture: 'https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=',
    },
    {
      code: 'SFO',
      name: 'San Francisco',
      airportName: 'San Francisco International Airport',
      airportWebsite: 'https://www.flysfo.com',
      email: 'info@flysfo.com',
      picture: 'https://media.istockphoto.com/id/1571494714/photo/view-of-golden-gate-bridge.jpg?s=612x612&w=0&k=20&c=VYSXTGOPzkNrXOY_UfNJMksDB8_iMLgF0m7FUuKdqnU=',
    },
    {
      code: 'LAX',
      name: 'Los Angeles',
      airportName: 'Los Angeles International Airport',
      airportWebsite: 'https://www.flylax.com',
      email: 'info@flylax.com',
      picture: 'https://media.istockphoto.com/id/1363277938/photo/palm-tree-lined-street-overlooking-los-angeles-at-sunset.jpg?s=612x612&w=0&k=20&c=auQOZwKoKwVj1WCOB8fPIlWLzqqGDHRXVEf719EMfs4=',
    },
    {
      code: 'SEA',
      name: 'Seattle',
      airportName: 'Seattle-Tacoma International Airport',
      airportWebsite: 'https://www.portseattle.org',
      email: 'info@portseattle.org',
      picture: 'https://media.istockphoto.com/id/1251467683/photo/seattle-cityscape-with-mt-rainier-in-the-background-at-sunset-washington-usa.jpg?s=612x612&w=0&k=20&c=0iIU5sPTe1u21VZ4HCmgQYwOGnQc6OKK2kPYFzNsWb8=',
    },
  ];

  getDestinations(): Destination[] {
    return this.destinations;
  }

  getDestination(code: string): Destination | undefined {
    return this.destinations.find(destination => destination.code === code);
  }
}
