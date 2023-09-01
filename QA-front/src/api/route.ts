import { Route } from '../state/interfaces';

export async function getRoutes(): Promise<Route[]> {
  return [
    {
      user: 'Pierre-Louis PAUGAM',
      status: 'validated',
      departureCity: 'Nantes',
      arrivalCity: 'Paris',
      remainingPlaces: 4,
      departureTime: '6h',
      departureDate: new Date('2023-08-01'),
      arrivalDate: new Date('2023-08-02'),
      car: {
        immatriculation: 'QR-384-RP',
        marque: 'Peugeot',
        modele: '508',
        couleur: 'Bleu',
        nbDoors: 5,
        disponibility: false,
        kilometers: 10000,
        site: 'Nantes'
      }
    },
    {
      user: 'Pierre-Louis PAUGAM',
      status: 'pending',
      departureCity: 'Nantes',
      arrivalCity: 'Nice',
      remainingPlaces: 2,
      departureTime: '8h',
      departureDate: new Date('2023-08-05'),
      arrivalDate: new Date('2023-08-06'),
      car: {
        immatriculation: 'KO-420-QP',
        marque: 'Peugeot',
        modele: '3008',
        couleur: 'Bleu',
        nbDoors: 5,
        disponibility: false,
        kilometers: 10000,
        site: 'Nantes'
      }
    },
    {
      user: 'Pierre-Louis PAUGAM',
      status: 'ended',
      departureCity: 'Nantes',
      arrivalCity: 'Paris',
      remainingPlaces: 1,
      departureTime: '6h',
      departureDate: new Date('2023-08-01'),
      arrivalDate: new Date('2023-08-02'),
      car: {
        immatriculation: 'UH-038-TH',
        marque: 'Citroen',
        modele: 'c3',
        couleur: 'Bleu',
        nbDoors: 5,
        disponibility: false,
        kilometers: 10000,
        site: 'Nantes'
      }
    },
    {
      user: 'Pierre-Louis PAUGAM',
      status: 'validated',
      departureCity: 'Niort',
      arrivalCity: 'Nantes',
      remainingPlaces: 2,
      departureTime: '6h',
      departureDate: new Date('2023-02-01'),
      arrivalDate: new Date('2023-03-02'),
      car: {
        immatriculation: 'ON-876-WB',
        marque: 'Fiat',
        modele: '500',
        couleur: 'Bleu',
        nbDoors: 3,
        disponibility: false,
        kilometers: 10000,
        site: 'Niort'
      }
    },
    {
      user: 'Pierre-Louis PAUGAM',
      status: 'validated',
      departureCity: 'Rennes',
      arrivalCity: 'Niort',
      remainingPlaces: 4,
      departureTime: '6h',
      departureDate: new Date('2023-02-01'),
      arrivalDate: new Date('2023-03-02'),
      car: {
        immatriculation: 'QI-297-CN',
        marque: 'Peugeot',
        modele: '508',
        couleur: 'Bleu',
        nbDoors: 5,
        disponibility: false,
        kilometers: 10000,
        site: 'Rennes'
      }
    }
  ];
}
