import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card } from 'antd';
import { FC } from 'react';

export interface RouteCardProps {
  departureCity: string;
  arrivalCity: string;
  remainingPlaces: number;
  departure_time: string;
}

const RouteCard: FC<RouteCardProps> = ({ departureCity, arrivalCity, remainingPlaces, departure_time }) => (
  <Card>
    <div>
      <p>{departureCity} </p>
      <FontAwesomeIcon icon={faArrowRight} />
      <p>{arrivalCity} </p>
    </div>
    <div>
      <p>{remainingPlaces} </p>
      <p>{departure_time} </p>
    </div>
    <Button type="primary" onClick={() => console.log('reservation')}>
      Réserver
    </Button>
  </Card>
);

export default RouteCard;
