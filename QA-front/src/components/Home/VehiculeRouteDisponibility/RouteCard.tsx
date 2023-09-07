import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { joinRouteAsync } from '../../../state/actions/routes.actions';
import { selectUser } from '../../../state/selector/user.selector';
import { useAutoMateDispatch } from '../../../state/store';
import { StyledCard, StyledGlobalContent } from './CarsCard';

export interface RouteCardProps {
  departureCity: string;
  arrivalCity: string;
  remainingPlaces: number;
  departure_time: string;
  routeId: string;
}

const DestinationLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }
  svg {
    font-size: 24px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardItem = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  margin-right: 24px;
`;

const InfoContent = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const RouteCard: FC<RouteCardProps> = ({ departureCity, arrivalCity, remainingPlaces, departure_time, routeId }) => {
  const dispatch = useAutoMateDispatch();
  const { registration_number } = useSelector(selectUser);
  const onJoinRoute = (): void => {
    dispatch(joinRouteAsync({ routeId: routeId, userId: registration_number || '' }));
  };
  return (
    <StyledCard bodyStyle={{ overflow: 'auto' }}>
      <StyledGlobalContent>
        <Content>
          <DestinationLabel>
            <p>{departureCity} </p>
            <FontAwesomeIcon icon={faArrowRight} />
            <p>{arrivalCity} </p>
          </DestinationLabel>
          <DetailsContent>
            <CardItem>
              <Label>Nombre de place(s) disponible(s) : </Label>
              <InfoContent>{remainingPlaces} </InfoContent>
            </CardItem>
            <CardItem>
              <Label>Heure du départ : </Label>
              <InfoContent>{departure_time}</InfoContent>
            </CardItem>
          </DetailsContent>
        </Content>
        <Button type="primary" onClick={onJoinRoute}>
          Réserver
        </Button>
      </StyledGlobalContent>
    </StyledCard>
  );
};

export default RouteCard;
