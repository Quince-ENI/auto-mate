import { Button, Table } from 'antd';
import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Route } from '../../state/interfaces';
import { selectUser } from '../../state/selector/user.selector';

export interface RequestTableProps {
  routes: Route[];
}

function UserName(): ReactElement<any, any> {
  const user = useSelector(selectUser);
  return <div>{user.name}</div>;
}

const columns = [
  {
    title: 'Demandeur',
    dataIndex: 'user',
    key: 'user',
    render: () => <UserName />
  },
  {
    title: 'Voiture',
    dataIndex: ['car', 'modele'],
    key: 'modele'
  },
  {
    title: 'Date départ',
    dataIndex: 'departure_time',
    key: 'departure_time'
  },
  {
    title: 'Date rendu',
    dataIndex: 'arrival_time',
    key: 'arrival_time'
  },
  {
    title: 'Destination',
    dataIndex: 'arrival_city',
    key: 'arrival_city'
  },
  {
    title: 'Places restantes',
    dataIndex: 'remaining_seats',
    key: 'remaining_seats'
  },
  {
    title: 'Statut',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => <Button key={status}>{status}</Button>
  }
];

const RequestTable: FC<RequestTableProps> = ({ routes }) => (
  <Table columns={columns} dataSource={routes} style={{ margin: '20px' }} />
);
export default RequestTable;
