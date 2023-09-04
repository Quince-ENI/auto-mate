import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { Content } from 'antd/lib/layout/layout';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getToken } from '../../api/jwt';
import { selectIsUserLogged } from '../../state/selector/user.selector';
import { actions, useAutoMateDispatch } from '../../state/store';
import NavigationMenu from './NavigationMenu';

const MainLayout = styled(Layout)`
  min-height: 100vh;
  overflow: hidden;
`;

const StyledFooter = styled(Footer)`
  background-color: #12551a;
  color: white;
`;

export const StyledBackgroundDiv = styled.div``;

function useRedirectIfNotLogged(): void {
  const jwtToken = getToken();
  const dispatch = useAutoMateDispatch();
  const isUserLogged = useSelector(selectIsUserLogged);
  const navigate = useNavigate();
  useEffect(() => {
    if (jwtToken) {
      dispatch(actions.setIsUserLogged(jwtToken));
      return;
    }
    navigate('/login');
  }, [dispatch, isUserLogged, jwtToken, navigate]);
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
