import { Car } from '../state/interfaces';

export async function getCars(): Promise<Car[]> {
  return [
    {
      immatriculation: 'QR-384-RP',
      marque: 'Peugeot',
      modele: '508',
      couleur: 'Bleu',
      nbDoors: 5,
      disponibility: false,
      kilometers: 10000
    },
    {
      immatriculation: 'KO-420-QP',
      marque: 'Peugeot',
      modele: '3008',
      couleur: 'Bleu',
      nbDoors: 5,
      disponibility: false,
      kilometers: 10000
    },
    {
      immatriculation: 'UH-038-TH',
      marque: 'Citroen',
      modele: 'c3',
      couleur: 'Bleu',
      nbDoors: 5,
      disponibility: false,
      kilometers: 10000
    },
    {
      immatriculation: 'ON-876-WB',
      marque: 'Fiat',
      modele: '500',
      couleur: 'Bleu',
      nbDoors: 3,
      disponibility: false,
      kilometers: 10000
    },
    {
      immatriculation: 'QI-297-CN',
      marque: 'Peugeot',
      modele: '508',
      couleur: 'Bleu',
      nbDoors: 5,
      disponibility: false,
      kilometers: 10000
    },
    {
      immatriculation: 'GF-766-FC',
      marque: 'Ferrari',
      modele: 'pista',
      couleur: 'rouge',
      nbDoors: 2,
      disponibility: false,
      kilometers: 10000
    }
  ];
}
