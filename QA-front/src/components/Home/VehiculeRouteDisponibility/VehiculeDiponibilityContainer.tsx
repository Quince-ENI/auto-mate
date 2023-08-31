import { Card, Col, Row } from 'antd';

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { RangeValue } from '../../../state/interfaces';
import { selectFilteredCars } from '../../../state/selector/cars.selector';
import { selectDatesFilter } from '../../../state/selector/common.selector';
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

const VehiculeDisponibilityContainer: FC = () => {
  const dispatch = useAutoMateDispatch();
  const sites = useSelector(selectSites);
  const siteOptions = sites.map(site => ({ label: site, value: site }));
  const filteredRoutes = useSelector(selectFilterRoutesFree);
  const filteredCars = useSelector(selectFilteredCars);
  const dates = useSelector(selectDatesFilter);

  const onSiteFilterChange = (site: string): void => {
    dispatch(actions.setFilterSite(site));
  };

  const onDateFilterChange = (dates: RangeValue): void => {
    dispatch(actions.setFilterDates(dates));
  };

  return (
    <StyledContainer>
      <Filter
        siteOptions={siteOptions}
        handleDateFilterChange={onDateFilterChange}
        handleSelectFilterChange={onSiteFilterChange}
        dates={dates}
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
