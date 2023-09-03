import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { Content } from 'antd/lib/layout/layout';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { selectIsUserLogged } from '../../state/selector/user.selector';
import NavigationMenu from './NavigationMenu';

const MainLayout = styled(Layout)`
  min-height: 100vh;
  overflow: hidden;
`;

const StyledFooter = styled(Footer)`
  background-color: #12551a;
  color: white;
`;

function useRedirectIfNotLogged(): void {
  const isUserLogged = useSelector(selectIsUserLogged);
  const navigate = useNavigate();
  useEffect(() => {
    if (isUserLogged) return;
    navigate('/login');
  }, [isUserLogged, navigate]);
}

const AutoMateLayout: FC = () => {
  useRedirectIfNotLogged();
  return (
    <MainLayout>
      <NavigationMenu />
      <Content>
        <Outlet />
      </Content>
      <StyledFooter>Tous droits réservés © Quince 2022/2023</StyledFooter>
    </MainLayout>
  );
};

export default AutoMateLayout;
