import { Table } from 'antd';
import { FC } from 'react';
import { Route } from '../../state/interfaces';

export interface RouteTableProps {
  routes: Route[];
}

const columns = [
  {
    title: 'Modèle',
    dataIndex: ['car', 'modele'],
    key: 'modele'
  },
  {
    title: 'Ville de départ',
    dataIndex: 'departure_city',
    key: 'departure_city'
  },
  {
    // eslint-disable-next-line @typescript-eslint/quotes
    title: "Ville d'arrivée",
    dataIndex: 'arrival_city',
    key: 'arrival_city'
  },
  {
    title: 'Places restantes',
    dataIndex: 'remaining_seats',
    key: 'remaining_seats'
  },
  {
    title: 'Heure de départ',
    dataIndex: 'departure_hour',
    key: 'departure_hour'
  }
];

const RouteTable: FC<RouteTableProps> = ({ routes }) => (
  <Table columns={columns} dataSource={routes} style={{ margin: '20px' }} />
);

export default RouteTable;
