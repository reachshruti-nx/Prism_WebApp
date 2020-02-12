import React from 'react';
import Header from '../components/Header.js';
export default class Dashboard extends React.Component {

  render () {
    return (
      <div>
        <Header/>
        <div>
          I am dashboard
        </div>
      </div>
    );
  }
}