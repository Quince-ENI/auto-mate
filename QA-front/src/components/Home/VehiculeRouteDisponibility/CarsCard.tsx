import { Button, Card } from 'antd';
import { Dayjs } from 'dayjs';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Car } from '../../../state/interfaces';
import { selectSitesFilter } from '../../../state/selector/common.selector';
import CarModal from './CarModal';

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
    <Card>
      <p>{car.marque}</p>
      <p>{car.modele}</p>
      <Button type="primary" onClick={showModal}>
        Réserver
      </Button>
      <CarModal
        isModalOpen={isModalOpen}
        car={car}
        setIsModalOpen={setIsModalOpen}
        departureDate={departureDate}
        returnDate={returnDate}
        departureCity={departureCity}
      />
    </Card>
  );
};

export default CarsCard;
