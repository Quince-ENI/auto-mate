import { Card, Col, Row } from 'antd';
import type { Dayjs } from 'dayjs';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Car, Route } from '../../../state/interfaces';
import { selectCars } from '../../../state/selector/cars.selector';
import { selectRoutes } from '../../../state/selector/routes.selector';
import { selectSites } from '../../../state/selector/site.selector';
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
export type RangeValue = [Dayjs | null, Dayjs | null] | null;

const VehiculeDisponibilityContainer: FC = () => {
  const cars = useSelector(selectCars);
  const routes = useSelector(selectRoutes);

  const sites = useSelector(selectSites);
  const siteOptions = sites.map(site => ({ label: site, value: site }));
  const [dates, setDates] = useState<RangeValue>(null);
  const [value, setValue] = useState<RangeValue>(null);
  const [filterSiteValue, setFilterSiteValue] = useState<string[]>([]);
  const [filteredRoutes, setFilteredRoute] = useState<Route[]>();
  const [filteredCars, setFilteredCars] = useState<Car[]>();

  useEffect(() => {
    setFilteredRoute(
      routes.filter(route => filterSiteValue.includes(route.departureCity) && route.remainingPlaces !== 0)
    );
    const useCar = filteredRoutes?.map(route => route.car);
    setFilteredCars(filteredRoutes?.map(route => route.car));
  }, [dates, value, filterSiteValue, routes, filteredRoutes, cars]);

  const onSiteFilterChange = (val: string[]): void => {
    setFilterSiteValue(val);
  };

  const onDateFilterChange = (val: RangeValue): void => {
    setDates(val);
  };

  return (
    <StyledContainer>
      <Filter
        siteOptions={siteOptions}
        handleDateFilterChange={onDateFilterChange}
        handleSelectFilterChange={onSiteFilterChange}
        dates={dates}
        value={value}
      />
      <StyledRow gutter={22}>
        <Col span={11}>
          <Card title="Voitures" bordered={false}>
            {filteredCars &&
              filteredCars.map(car => <CarsCard key={car.immatriculation} name={car.modele} marque={car.marque} />)}
          </Card>
        </Col>
        <Col span={11}>
          <Card title="Trajet" bordered={false}>
            {filteredRoutes &&
              filteredRoutes.map(route => (
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
