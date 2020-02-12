import React from 'react';
import { Icon, Drawer } from 'antd';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false
    };
  }

  showDrawer = () => {
    this.setState({
      menuVisible: true,
    });
  };

  onClose = () => {
    this.setState({
      menuVisible: false,
    });
  };

  render () {
    return (
      <div>
        <Drawer
          title="What to call this ??"
          placement="left"
          visible={ this.state.menuVisible }
          closable={ false }
          onClose={ this.onClose }
        >
          <p>Tasks</p>
          <p>Alerts</p>
          <p>What else?</p>
        </Drawer>
        <div class="header-container">
          <Icon type="menu" onClick={this.showDrawer} />
           Nutanix with Logo
          <Icon type="setting" />
        </div>
      </div>
    );
  }
}