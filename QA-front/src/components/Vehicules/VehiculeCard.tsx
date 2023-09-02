import { Button, Card } from 'antd';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { styled } from 'styled-components';
import { Car } from '../../state/interfaces';
import './VehiculeCard.css';

interface VehicleCardProps {
  car: Car;
}
type ToggleInfo = () => void;

const VehiculeStyledCard = styled(Card)`
  width: 400;
  margin: 16px auto;
  padding: 16px;
`;

const VehicleCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
`;

const ToggleInfoButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
`;

const ContentTitle = styled.div`
  width: 70%;
`;

const VehicleCard: React.FC<VehicleCardProps> = ({ car }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo: ToggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <VehiculeStyledCard bodyStyle={{ padding: 0 }}>
      <VehicleCardContent>
        <ContentTitle>
          <p>
            <strong>
              {car.marque} {car.modele}
            </strong>
          </p>
        </ContentTitle>
        <ToggleInfoButtonContainer>
          <Button type="primary" onClick={toggleInfo}>
            {showInfo ? 'Masquer Info' : 'Afficher Info'}
          </Button>
        </ToggleInfoButtonContainer>
      </VehicleCardContent>
      <CSSTransition in={showInfo} timeout={300} classNames="fade" unmountOnExit>
        <div>
          <p>
            <strong>Immatriculation:</strong> {car.immatriculation}
          </p>
          <p>
            <strong>Couleur:</strong> {car.couleur}
          </p>
          <p>
            <strong>Nombre de portes:</strong> {car.nb_Portes}
          </p>
          <p>
            <strong>Disponibilité:</strong> {car.disponibility ? 'Disponible' : 'Non disponible'}
          </p>
          <p>
            <strong>Kilomètres:</strong> {car.kilometers} km
          </p>
          <p>
            <strong>Site:</strong> {car.site.city}
          </p>
        </div>
      </CSSTransition>
    </VehiculeStyledCard>
  );
};

export default VehicleCard;
