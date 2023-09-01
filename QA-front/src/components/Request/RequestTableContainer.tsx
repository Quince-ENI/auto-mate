import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectRoutes } from '../../state/selector/routes.selector';
import RequestTable from './RequestTable';

const RequestTableContainer: FC = () => {
  const routes = useSelector(selectRoutes);

  return <RequestTable routes={routes} />;
};

export default RequestTableContainer;
