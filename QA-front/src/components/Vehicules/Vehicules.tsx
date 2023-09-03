import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserSiteCars } from '../../state/selector/cars.selector';
import { StyledContainer } from '../Home/VehiculeRouteDisponibility/VehiculeDiponibilityContainer';
import VehiculeCard from './VehiculeCard';

const Vehicles: React.FC = () => {
  const cars = useSelector(selectUserSiteCars);
  return (
    <StyledContainer>
      <Row gutter={16}>
        {cars.map((car, index) => (
          <Col span={12} key={index}>
            <VehiculeCard car={car} />
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
};

export default Vehicles;
