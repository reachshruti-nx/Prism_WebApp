import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import React from 'react';

export default class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="1">
          <Icon type="mail" />Profile
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="appstore" />Projects
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="appstore" />Action Awaited
        </Menu.Item>
      </Menu>
    );
  }
}
