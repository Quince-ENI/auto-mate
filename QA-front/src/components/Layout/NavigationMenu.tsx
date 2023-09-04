import { Avatar, Layout, Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import jwt_decode from 'jwt-decode';
import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { getToken, removeToken } from '../../api/jwt';
import AutoMatelogo from '../../assets/AutoMateLogo';
import { selectUserRole } from '../../state/selector/user.selector';

const StyledHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding-left: 0;
`;

const StyledMenu = styled(Menu)`
  min-width: 500px;
`;

function getItem(label: ReactNode, key: React.Key): ItemType {
  return { label, key } as unknown as ItemType;
}

const NavigationMenu: FC = () => {
  const jwtToken = getToken();
  const decodeJwt: { picture: string } = jwtToken ? jwt_decode(jwtToken) : { picture: '' };
  const userPicture = decodeJwt ? decodeJwt.picture : '';
  const userRole = useSelector(selectUserRole);
  const navigate = useNavigate();
  const defaultItems: ItemType[] = [
    getItem(<Link to="/home">Accueil</Link>, 'home'),
    getItem(<Link to="/route">Mes Trajets</Link>, 'route'),
    getItem(
      <Avatar
        size={48}
        src={userPicture}
        onClick={() => {
          removeToken();
          navigate('/login');
        }}
      />,
      'login'
    )
  ];

  const adminItems: ItemType[] = [
    getItem(<Link to="/vehicules">Voitures</Link>, 'vehicules'),
    getItem(<Link to="/request">Demandes</Link>, 'request')
  ];

  const items = userRole === 'responsable' ? adminItems.concat(defaultItems) : defaultItems;

  return (
    <StyledHeader>
      <AutoMatelogo />
      <StyledMenu mode="horizontal" items={items} defaultSelectedKeys={['home']} />
    </StyledHeader>
  );
};

export default NavigationMenu;
