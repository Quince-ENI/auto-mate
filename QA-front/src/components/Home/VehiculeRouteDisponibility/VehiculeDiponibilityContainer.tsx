import { Card, Col, Row } from 'antd';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { selectCars } from '../../../state/selector/cars.selector';
import CarsCard from './CarsCard';

const StyledRow = styled(Row)`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const VehiculeDisponibilityContainer: FC = () => {
  const cars = useSelector(selectCars);
  return (
    <StyledRow gutter={22}>
      <Col span={11}>
        <Card title="Voitures" bordered={false}>
          {cars.map(car => (
            <CarsCard key={car.immatriculation} name={car.modele} />
          ))}
        </Card>
      </Col>
      <Col span={11}>
        <Card title="Trajet" bordered={false}>
          Card content
        </Card>
      </Col>
    </StyledRow>
  );
};

export default VehiculeDisponibilityContainer;
