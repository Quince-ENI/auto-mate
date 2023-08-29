import { Button, Card } from 'antd';
import { FC } from 'react';

export interface CarCardProps {
  name: string;
}

const CarsCard: FC<CarCardProps> = ({ name }) => (
  <Card>
    <p>{name}</p>
    <Button type="primary" onClick={() => console.log('reservation')}>
      Réserver
    </Button>
  </Card>
);

export default CarsCard;
