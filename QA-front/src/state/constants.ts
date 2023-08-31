import { AutoMateState } from './interfaces';

export const INITIAL_STATE: AutoMateState = {
  ui: {
    filter: 'test',
    carsLoading: false,
    routesLoading: false, // Ajoutez cette propriété
    isUserReceive: false // Ajoutez cette propriété
  },
  entities: {
    isUserLogged: undefined,
    routes: [
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
    ],
    user: {
      name: 'defaultName',
      picture: 'defaultpicture',
      email: 'defaultMail',
      role: 'user'
    },
    cars: [
      {
        immatriculation: 'AE-123-CD',
        marque: 'Renault',
        modele: 'Clio',
        couleur: 'Rouge',
        nbDoors: 5,
        disponibility: true,
        kilometers: 10000
      },
      {
        immatriculation: 'EP-123-RP',
        marque: 'Peugeot',
        modele: '508',
        couleur: 'Bleu',
        nbDoors: 5,
        disponibility: false,
        kilometers: 10000
      },
      {
        immatriculation: 'WE-456-RS',
        marque: 'Renault',
        modele: 'Clio',
        couleur: 'Rouge',
        nbDoors: 5,
        disponibility: true,
        kilometers: 10000
      }
    ]
  }
};
