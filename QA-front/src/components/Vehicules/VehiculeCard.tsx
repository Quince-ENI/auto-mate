import { Button, Card } from 'antd';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Car } from '../../state/interfaces';
import './VehiculeCard.css';

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
      style={{
        width: 400,
        margin: '16px auto',
        padding: 16
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
          position: 'relative'
        }}
      >
        <div style={{ width: '70%' }}>
          <p>
            <strong>
              {car.marque} {car.modele}
            </strong>
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: 16
          }}
        >
          <Button type="primary" onClick={toggleInfo}>
            {showInfo ? 'Masquer Info' : 'Afficher Info'}
          </Button>
        </div>
      </div>
      <CSSTransition in={showInfo} timeout={300} classNames="fade" unmountOnExit>
        <div>
          <p>
            <strong>Immatriculation:</strong> {car.immatriculation}
          </p>
          <p>
            <strong>Couleur:</strong> {car.couleur}
          </p>
          <p>
            <strong>Nombre de portes:</strong> {car.nbDoors}
          </p>
          <p>
            <strong>Disponibilité:</strong> {car.disponibility ? 'Disponible' : 'Non disponible'}
          </p>
          <p>
            <strong>Kilomètres:</strong> {car.kilometers} km
          </p>
          <p>
            <strong>Site:</strong> {car.site}
          </p>
        </div>
      </CSSTransition>
    </Card>
  );
};

export default VehicleCard;
