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
    }
  ];
}
