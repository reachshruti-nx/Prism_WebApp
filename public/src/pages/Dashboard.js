import React from 'react';
import Header from '../components/Header.js';
import { Card } from 'antd';

export default class Dashboard extends React.Component {

  getClusterDetails = () => {
    return (
      <Card title="Default size card" extra={<a href="#">More</a>}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  }

  getTasks = () => {
    return (
      <Card title="Default size card" extra={<a href="#">More</a>}>
        <p>Tasks</p>
      </Card>
    );
  }

  getAlerts = () => {
    return (
      <Card title="Default size card" extra={<a href="#">More</a>}>
        <p>Tasks</p>
      </Card>
    );
  }

  render () {
    return (
      <div>
        <Header/>
        <div class="dashboard-container">
          { this.getClusterDetails() }
          { this.getTasks() }
          { this.getAlerts() }
        </div>
      </div>
    );
  }
}