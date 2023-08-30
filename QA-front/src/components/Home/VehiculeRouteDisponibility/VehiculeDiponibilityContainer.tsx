import { Card, Col, Row } from 'antd';
import type { Dayjs } from 'dayjs';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { selectFilteredCars } from '../../../state/selector/cars.selector';
import { selectFilterRoutesFree } from '../../../state/selector/routes.selector';
import { selectSites } from '../../../state/selector/site.selector';
import { actions, useAutoMateDispatch } from '../../../state/store';
import CarsCard from './CarsCard';
import Filter from './Filter/Filter';
import RouteCard from './RouteCard';

const StyledRow = styled(Row)`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const StyledContainer = styled.div`
  padding: 20px;
`;
export type RangeValue = [Dayjs | null, Dayjs | null] | null;

const VehiculeDisponibilityContainer: FC = () => {
  const dispatch = useAutoMateDispatch();
  const sites = useSelector(selectSites);
  const siteOptions = sites.map(site => ({ label: site, value: site }));
  const [dates, setDates] = useState<RangeValue>(null);
  const [value, setValue] = useState<RangeValue>(null);
  const filteredRoutes = useSelector(selectFilterRoutesFree);
  const filteredCars = useSelector(selectFilteredCars);

  const onSiteFilterChange = (sites: string[]): void => {
    dispatch(actions.setFilterSite(sites));
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
                  departure_time={route.departureTime}
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
