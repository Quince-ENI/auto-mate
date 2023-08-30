import { Button, Card } from 'antd';
import { FC } from 'react';

export interface CarCardProps {
  name: string;
  marque: string;
}

const CarsCard: FC<CarCardProps> = ({ name, marque }) => (
  <Card>
    <p>{name}</p>
    <p>{marque}</p>
    <Button type="primary" onClick={() => console.log('reservation')}>
      Réserver
    </Button>
  </Card>
);

export default CarsCard;
