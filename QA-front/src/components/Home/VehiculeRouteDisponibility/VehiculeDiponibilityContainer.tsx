import { Card, Col, Row } from 'antd';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { selectCars } from '../../../state/selector/cars.selector';
import { selectRoutes } from '../../../state/selector/routes.selector';
import CarsCard from './CarsCard';
import Filter from './Filter/Filter';
import RouteCard from './RouteCard';

const StyledRow = styled(Row)`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;
const StyledContainer = styled.div`
  padding: 20px;
`;

const VehiculeDisponibilityContainer: FC = () => {
  const cars = useSelector(selectCars);
  const routes = useSelector(selectRoutes);
  return (
    <StyledContainer>
      <Filter />
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
            {routes.map(route => (
              <RouteCard
                arrivalCity={route.arrivalCity}
                departureCity={route.departureCity}
                departure_time={route.departure_time}
                remainingPlaces={route.remainingPlaces}
              />
            ))}
          </Card>
        </Col>
      </StyledRow>
    </StyledContainer>
  );
};

export default VehiculeDisponibilityContainer;
