import { FC } from 'react';
import { StyledContainer } from '../Home/VehiculeRouteDisponibility/VehiculeDiponibilityContainer';
import UserRouteTableContainer from './UserRouteTableContainer';

const UserRoute: FC = () => (
  <StyledContainer>
    <UserRouteTableContainer />
  </StyledContainer>
);

export default UserRoute;
