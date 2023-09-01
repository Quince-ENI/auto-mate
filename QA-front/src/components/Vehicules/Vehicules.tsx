import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { getCars } from '../../api/cars';
import { Car } from '../../state/interfaces';
import VehiculeCard from './VehiculeCard';

const Vehicles: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    async function fetchCars() {
      const carsData = await getCars();
      setCars(carsData);
    }

    fetchCars();
  }, []);

  return (
    <div>
      <Row gutter={16}>
        {cars.map((car, index) => (
          <Col span={12} key={index}>
            <VehiculeCard car={car} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Vehicles;
