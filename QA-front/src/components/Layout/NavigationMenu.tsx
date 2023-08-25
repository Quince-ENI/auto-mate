import { Avatar, Layout, Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import jwt_decode from 'jwt-decode';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { getToken } from '../../api/jwt';
import AutoMatelogo from '../../assets/AutoMateLogo';

const StyledHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding-left: 0;
`;

const StyledMenu = styled(Menu)`
  width: 300px;
`;

function getItem(label: ReactNode, key: React.Key): ItemType {
  return { label, key } as unknown as ItemType;
}

const NavigationMenu: FC = () => {
  const jwtToken = getToken();
  const decodeJwt: { picture: string } = jwtToken ? jwt_decode(jwtToken) : { picture: '' };
  const userPicture = decodeJwt ? decodeJwt.picture : '';
  const defaultItems: ItemType[] = [
    getItem(<Link to="/">Accueil</Link>, 'home'),
    getItem(<Link to="/route">Mes Trajets</Link>, 'route'),
    getItem(<Avatar size={48} src={userPicture} />, 'account')
  ];

  return (
    <StyledHeader>
      <AutoMatelogo />
      <StyledMenu mode="horizontal" items={defaultItems} defaultSelectedKeys={['home']} />
    </StyledHeader>
  );
};

export default NavigationMenu;
