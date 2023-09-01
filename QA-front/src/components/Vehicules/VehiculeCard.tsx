import { Button, Card } from 'antd';
import React, { useState } from 'react';
import { Car } from '../../state/interfaces';

interface VehicleCardProps {
  car: Car;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ car }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Card
      title={`${car.marque} ${car.modele}`}
      extra={
        <Button type="primary" onClick={toggleInfo}>
          Information
        </Button>
      }
      style={{ margin: '16px', width: 300 }}
    >
      {showInfo && (
        <>
          <p>Immatriculation: {car.immatriculation}</p>
          <p>Couleur: {car.couleur}</p>
          <p>Nombre de portes: {car.nbDoors}</p>
          <p>Disponibilité: {car.disponibility ? 'Disponible' : 'Non disponible'}</p>
          <p>Kilomètres: {car.kilometers} km</p>
          <p>Site: {car.site}</p>
        </>
      )}
    </Card>
  );
};

export default VehicleCard;
