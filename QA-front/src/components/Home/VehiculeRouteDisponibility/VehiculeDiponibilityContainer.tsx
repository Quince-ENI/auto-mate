import { Card, Col, Row } from 'antd';

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import imgBackground from '../../../assets/imgBackground.svg';
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
export const StyledContainer = styled.div`
  padding: 20px;
  height: 90vh;
  background: url(${imgBackground}) no-repeat;
  background-position: bottom right;
`;

const VehiculeDisponibilityContainer: FC = () => {
  const dispatch = useAutoMateDispatch();
  const sites = useSelector(selectSites);
  const siteOptions = sites.map(site => ({ label: site.city, value: site.city }));
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
              filteredCars.map(car => (
                <CarsCard
                  key={car.immatriculation}
                  car={car}
                  departureDate={dates && dates[0]}
                  returnDate={dates && dates[1]}
                />
              ))}
          </Card>
        </Col>
        <Col span={11}>
          <Card title="Trajet" bordered={false}>
            {filteredRoutes &&
              filteredRoutes.map(route => (
                <RouteCard
                  arrivalCity={route.arrival_city}
                  departureCity={route.departure_city}
                  departure_time={route.departureHour}
                  remainingPlaces={route.remaining_seats}
                  routeId={route.idRoute}
                />
              ))}
          </Card>
        </Col>
      </StyledRow>
    </StyledContainer>
  );
};

export default VehiculeDisponibilityContainer;
