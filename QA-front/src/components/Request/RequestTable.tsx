import { Table } from 'antd';
import { FC } from 'react';
import { Route } from '../../state/interfaces';

export interface RequestTableProps {
  routes: Route[];
}

const columns = [
  {
    title: 'Demandeur',
    dataIndex: 'user',
    key: 'user'
  },
  {
    title: 'Voiture',
    dataIndex: ['car', 'modele'],
    key: 'modele'
  },
  {
    title: 'Destination',
    dataIndex: 'arrival_city',
    key: 'arrival_city'
  },
  {
    title: 'Site de départ',
    dataIndex: ['car', 'site'],
    key: 'site'
  },
  {
    title: 'Places restantes',
    dataIndex: 'remaining_seats',
    key: 'remaining_seats'
  },
  {
    title: 'Statut',
    dataIndex: 'status',
    key: 'status'
  }
];

const RequestTable: FC<RequestTableProps> = ({ routes }) => (
  <Table columns={columns} dataSource={routes} style={{ margin: '20px' }} />
);

export default RequestTable;
