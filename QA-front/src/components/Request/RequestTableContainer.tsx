import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectPendingRoutes } from '../../state/selector/routes.selector';
import RequestTable from './RequestTable';

const RequestTableContainer: FC = () => {
  const routes = useSelector(selectPendingRoutes);

  return <RequestTable routes={routes} />;
};

export default RequestTableContainer;
