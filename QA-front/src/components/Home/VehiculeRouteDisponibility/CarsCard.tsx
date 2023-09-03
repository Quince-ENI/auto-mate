import { Button, Card } from 'antd';
import { Dayjs } from 'dayjs';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Car } from '../../../state/interfaces';
import { selectSitesFilter } from '../../../state/selector/common.selector';
import CarModal from './CarModal';

export const StyledCard = styled(Card)`
  margin: 10px;
  background-color: #c6d6c8;
`;

export const StyledGlobalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardItem = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
`;

export const Label = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  margin-right: 24px;
`;

export const InfoContent = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;
export interface CarCardProps {
  car: Car;
  departureDate?: Dayjs | null;
  returnDate?: Dayjs | null;
}

const CarsCard: FC<CarCardProps> = ({ car, departureDate, returnDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (): void => {
    setIsModalOpen(true);
  };
  const departureCity = useSelector(selectSitesFilter);

  return (
    <StyledCard>
      <StyledGlobalContent>
        <CardContent>
          <CardItem>
            <Label>Marque : </Label>
            <InfoContent>{car.marque}</InfoContent>
          </CardItem>
          <CardItem>
            <Label>Modele : </Label>
            <InfoContent>{car.modele}</InfoContent>
          </CardItem>
        </CardContent>
        <Button type="primary" onClick={showModal}>
          Réserver
        </Button>
      </StyledGlobalContent>
      <CarModal
        isModalOpen={isModalOpen}
        car={car}
        setIsModalOpen={setIsModalOpen}
        departureDate={departureDate}
        returnDate={returnDate}
        departureCity={departureCity}
      />
    </StyledCard>
  );
};

export default CarsCard;
