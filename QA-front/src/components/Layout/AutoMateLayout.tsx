import { Layout } from "antd"
import { Content } from "antd/lib/layout/layout"
import styled from "styled-components"
import NavigationMenu from "./NavigationMenu"
import { Outlet, useNavigate } from "react-router-dom"
import { FC, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectIsUserLogged } from "../../state/selector"

const MainLayout = styled(Layout)`
  min-height: 100vh;
`

const AutoMateLayout: FC = () => {
  const isUserLogged = useSelector(selectIsUserLogged);
  const navigate = useNavigate();
  useEffect(() => {
    if (isUserLogged) return
    navigate("/login")
  }, [isUserLogged])
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
