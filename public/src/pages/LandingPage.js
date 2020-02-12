import React from 'react';
import { Carousel, Button } from 'antd';
import {hashHistory} from 'react-router';
export default class LandingPage extends React.Component {
  getStarted = () => {
    // Navigate to login page to get started with the app
    hashHistory.push("/login");
  }

  render () {
    return (
      <div class="landing-page-container">
        <Carousel autoplay={false}>
          <div class="data">
            <img src="/images/welcome.png" alt="background image" />

            <div>
              <h3>Welcome to Prism</h3>
              <p>One App for managing your Enterprise Cloud.</p>
            </div>
           </div>

          <div class="data">
            <img src="/images/infra.png" alt="background image" />

            <div>
              <h3>Infrastructure Management</h3>
              <p>Centraliszed management of physical and virtual infrastructure.</p>
            </div>
           </div>


          <div class="data">
            <img src="/images/insights.png" alt="background image" />

            <div>
              <h3>Operational Insights</h3>
              <p>Insights and recommendations to guide your day to day operations.</p>
            </div>
           </div>


          <div class="data">
            <img src="/images/planning.png" alt="background image" />

            <div>
              <h3>Planning</h3>
              <p>Insights to plan for the growth of your Enterprise cloud.</p>
            </div>
           </div>

        </Carousel>
        <div>
          <Button
            class="login-button"
            type="primary"
            onClick={() => this.getStarted()}>
            Get Started
          </Button>
        </div>
      </div>
    );
  }
}