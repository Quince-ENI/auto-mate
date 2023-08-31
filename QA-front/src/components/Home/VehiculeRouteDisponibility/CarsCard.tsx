import { Button, Card } from 'antd';
import { Dayjs } from 'dayjs';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSitesFilter } from '../../../state/selector/common.selector';
import CarModal from './CarModal';

export interface CarCardProps {
  name: string;
  marque: string;
  immatriculation: string;
  departureDate?: Dayjs | null;
  returnDate?: Dayjs | null;
}

const CarsCard: FC<CarCardProps> = ({ name, marque, immatriculation, departureDate, returnDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (): void => {
    setIsModalOpen(true);
  };
  const departureCity = useSelector(selectSitesFilter);

  return (
    <Card>
      <p>{name}</p>
      <p>{marque}</p>
      <Button type="primary" onClick={showModal}>
        Réserver
      </Button>
      <CarModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        carName={name}
        carMarque={marque}
        immatriculation={immatriculation}
        departureDate={departureDate}
        returnDate={returnDate}
        departureCity={departureCity}
      />
    </Card>
  );
};

export default CarsCard;
