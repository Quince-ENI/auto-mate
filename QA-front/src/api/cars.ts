import { Car } from '../state/interfaces';

export async function getCars(): Promise<Car[]> {
  return [
    {
      immatriculation: 'AE-123-CD',
      marque: 'Renault',
      modele: 'Megane',
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
  ];
}
