import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { FC } from 'react';

const MainLayout = styled(Layout)`
  min-height: 100vh;
`;

const LoginPageLayout: FC = () => (
  <MainLayout>
    <Content>
      <Outlet />
    </Content>
  </MainLayout>
);

export default LoginPageLayout;
