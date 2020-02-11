import React from 'react';
import { Link } from 'react-router';
import Responsive from 'react-responsive';

const Desktop = ({children}) => <Responsive minWidth={992} children={children}/>;
const Mobile = ({children}) => <Responsive maxWidth={768} children={children}/>;
const Tablet = ({children}) => <Responsive minWidth={768} maxWidth={992} children={children}/>;

class NavigationComponent extends React.Component {

  render () {
    return (
      <div>
        <div className="nav-parent">
          <div className="nav-child">
            <a href="#">Profile</a>
          </div>
           <div className="nav-child">
            <a href="#">Projects</a>
          </div>
           <div className="nav-child">
            <a href="#">Action Awaited</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationComponent;
