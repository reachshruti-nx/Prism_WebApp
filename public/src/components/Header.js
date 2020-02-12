import React from 'react';
import { Icon, Drawer } from 'antd';
import {hashHistory} from 'react-router';
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

  openTasksPage = () => {
    hashHistory.push("/tasks");
  }

  openAlertsPage = () => {
    hashHistory.push("/alerts");
  }

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
          <div class="menu-item" onClick={this.openTasksPage} > Tasks </div>
          <div class="menu-item" onClick={this.openAlertsPage} > Alerts </div>
        </Drawer>
        <div class="header-container">
          <Icon type="menu" onClick={this.showDrawer} />
          <h1>
            <img src="data:image/png;base64,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" alt="" class="prism-logo"/>
          </h1>
          <Icon type="setting" />
        </div>
      </div>
    );
  }
}