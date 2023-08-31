import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectRoutes } from '../../state/selector/routes.selector';
import RouteTable from './UserRouteTable';

const RouteTableContainer: FC = () => {
  const routes = useSelector(selectRoutes);

  return <RouteTable routes={routes} />;
};

export default RouteTableContainer;
