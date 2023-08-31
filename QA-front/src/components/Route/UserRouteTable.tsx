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
    dataIndex: 'departureCity',
    key: 'departureCity'
  },
  {
    title: 'Ville d\'arrivée',
    dataIndex: 'arrivalCity',
    key: 'arrivalCity'
  },
  {
    title: 'Places restantes',
    dataIndex: 'remainingPlaces',
    key: 'remainingPlaces'
  },
  {
    title: 'Heure de départ',
    dataIndex: 'departure_time',
    key: 'departure_time'
  }
];

const RouteTable: FC<RouteTableProps> = ({ routes }) => <Table columns={columns} dataSource={routes} />;

export default RouteTable;
