import { Button, Card } from 'antd';
import React from 'react';
import { Car } from '../../state/interfaces';

interface VehiculeCardProps {
  car: Car;
}

const VehiculeCard: React.FC<VehiculeCardProps> = ({ car }) => (
  <Card
    title={`${car.marque} ${car.modele}`}
    extra={<Button type="primary">Information</Button>}
    style={{ margin: '16px', width: 300 }}
  >
    <p>Immatriculation: {car.immatriculation}</p>
    <p>Couleur: {car.couleur}</p>
    <p>Nombre de portes: {car.nbDoors}</p>
    <p>Disponibilité: {car.disponibility ? 'Disponible' : 'Non disponible'}</p>
    <p>Kilomètres: {car.kilometers} km</p>
    <p>Site: {car.site}</p>
  </Card>
);

export default VehiculeCard;
