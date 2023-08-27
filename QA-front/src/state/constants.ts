import { AutoMateState } from './interfaces';

export const INITIAL_STATE: AutoMateState = {
  ui: {
    filter: 'test',
    carsLoading: false
  },
  entities: {
    isUserLogged: false,
    user: {
      name: 'defaultName',
      picture: 'defaultpicture',
      email: 'defaultMail'
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
