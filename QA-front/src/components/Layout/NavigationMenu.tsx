import { Link, useLocation } from "react-router-dom"
import { Layout, Menu } from "antd"
import { ItemType } from "antd/lib/menu/hooks/useItems"
import AutoMatelogo from "../../app/assets/AutoMateLogo"
import { FC, ReactNode } from "react"
import { styled } from "styled-components"

const StyledHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding-left: 0;
`

const StyledMenu = styled(Menu)`
  width: 200px;
`

function getItem(label: ReactNode, key: React.Key): ItemType {
  return { label, key } as unknown as ItemType
}

const NavigationMenu: FC = () => {
  const defaultItems: ItemType[] = [
    getItem(<Link to="/">Accueil</Link>, "home"),
    getItem(<Link to="/route">Mes Trajets</Link>, "route"),
  ]
  return (
    <StyledHeader>
      <AutoMatelogo />
      <StyledMenu
        mode="horizontal"
        items={defaultItems}
        defaultSelectedKeys={["home"]}
      />
    </StyledHeader>
  )
}

export default NavigationMenu
