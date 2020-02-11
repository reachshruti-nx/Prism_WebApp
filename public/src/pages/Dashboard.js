import React from 'react';
import { Input, Button } from 'antd';
import axios from 'axios';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginDisabled: false
    };
  }

  render () {
    return (
      <div class="login-container">
        I am in dashboard
      </div>
    );
  }
}