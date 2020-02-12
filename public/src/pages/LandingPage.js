import React from 'react';
import { Carousel, Button } from 'antd';
import {hashHistory} from 'react-router';
export default class LandingPage extends React.Component {
  getStarted = () => {
    hashHistory.push("/login");
    console.log("I am in get started");
  }

  render () {
    return (
      <div class="landing-page-container">
        <Carousel autoplay>
          <div> Welcome to Prism 1234 </div>
          <div> Welcome to Prism 6789 </div>
          <div> Welcome to Prism abcd </div>
          <div> Welcome to Prism xvyz </div>
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