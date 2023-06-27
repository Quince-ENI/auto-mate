import { Layout } from "antd"
import { Content } from "antd/lib/layout/layout"
import styled from "styled-components"
import NavigationMenu from "./NavigationMenu"
import { Outlet } from "react-router-dom"
import { FC } from "react"

const MainLayout = styled(Layout)`
  min-height: 100vh;
`

const AutoMateLayout: FC = () => {
  return (
    <MainLayout>
      <NavigationMenu />
      <Content>
        <Outlet />
      </Content>
    </MainLayout>
  )
}

export default AutoMateLayout
