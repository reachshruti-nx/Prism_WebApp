import React from 'react';
import { Link } from 'react-router';

export default class ContentTwo extends React.Component {

  render(){
    return (
      <div>
        <Link to='/'>Visit First Page</Link>
        <Link to='/tweets'>Visit Tweets</Link>
        <img src="/images/thunderstorm.png" />
        <h1>Content Of the Application Second Part</h1>
        <h1>Content Of the Application Second Part</h1>
        <h1>Content Of the Application Second Part</h1>
        <h1>Content Of the Application Second Part</h1>
        <h1>Content Of the Application Second Part</h1>
        <h1>Content Of the Application Second Part</h1>
      </div>
    );
  }
}