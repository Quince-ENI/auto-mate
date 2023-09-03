import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectUserRoutes } from '../../state/selector/routes.selector';
import RouteTable from './UserRouteTable';

const RouteTableContainer: FC = () => {
  const routes = useSelector(selectUserRoutes);

  return <RouteTable routes={routes} />;
};

export default RouteTableContainer;
