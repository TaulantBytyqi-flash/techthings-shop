import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Produktet</a>
    </Menu.Item>
    <SubMenu title={<span>Pjese per kompjutere</span>}>
      <MenuItemGroup title="Case">
        <Menu.Item key="setting:1"><a href="/computerparts"></a>Akseore</Menu.Item>
        <Menu.Item key="setting:2"><a href="/computerparts"></a>Full Tower</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Procesore">
        <Menu.Item key="setting:3"><a href="/computerparts"></a>Per server</Menu.Item>
        <Menu.Item key="setting:4"><a href="/computerparts"></a>Per Kompjutere</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
    <SubMenu title={<span>Gaming</span>}>
      <MenuItemGroup title="Playstaion 4">
        <Menu.Item key="setting:1">Konzola</Menu.Item>
        <Menu.Item key="setting:2">Akseore</Menu.Item>
        <Menu.Item key="setting:3">VR</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Xbox One">
        <Menu.Item key="setting:3">Konzola</Menu.Item>
        <Menu.Item key="setting:4">Kufje</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
    <SubMenu title={<span>Akseore</span>}>
      <MenuItemGroup title="Aksesore">
        <Menu.Item key="setting:1">Kabllo</Menu.Item>
        <Menu.Item key="setting:2">Maus</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Canta">
        <Menu.Item key="setting:3">Per laptop</Menu.Item>
        <Menu.Item key="setting:4">Per aparat fotografik</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu