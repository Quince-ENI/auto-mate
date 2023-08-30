import { Route } from '../state/interfaces';

export async function getRoutes(): Promise<Route[]> {
  return [
    {
      departureCity: 'Nantes',
      arrivalCity: 'Paris',
      remainingPlaces: 4,
      departure_time: '6h',
      car: {
        immatriculation: 'EP-123-RP',
        marque: 'Peugeot',
        modele: '508',
        couleur: 'Bleu',
        nbDoors: 5,
        disponibility: false,
        kilometers: 10000
      }
    },
    {
      departureCity: 'Nantes',
      arrivalCity: 'Nice',
      remainingPlaces: 2,
      departure_time: '8h',
      car: {
        immatriculation: 'EF-420-QP',
        marque: 'Peugeot',
        modele: '3008',
        couleur: 'Bleu',
        nbDoors: 5,
        disponibility: false,
        kilometers: 10000
      }
    },
    {
      departureCity: 'Niort',
      arrivalCity: 'Paris',
      remainingPlaces: 0,
      departure_time: '6h',
      car: {
        immatriculation: 'EP-123-RP',
        marque: 'Citroen',
        modele: 'c3',
        couleur: 'Bleu',
        nbDoors: 5,
        disponibility: false,
        kilometers: 10000
      }
    },
    {
      departureCity: 'Niort',
      arrivalCity: 'Nantes',
      remainingPlaces: 2,
      departure_time: '6h',
      car: {
        immatriculation: 'EP-123-RP',
        marque: 'Fiat',
        modele: '500',
        couleur: 'Bleu',
        nbDoors: 3,
        disponibility: false,
        kilometers: 10000
      }
    },
    {
      departureCity: 'Renne',
      arrivalCity: 'Niort',
      remainingPlaces: 4,
      departure_time: '6h',
      car: {
        immatriculation: 'EP-123-RP',
        marque: 'Peugeot',
        modele: '508',
        couleur: 'Bleu',
        nbDoors: 5,
        disponibility: false,
        kilometers: 10000
      }
    }
  ];
}
