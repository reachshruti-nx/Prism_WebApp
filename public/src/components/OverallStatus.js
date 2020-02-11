import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'antd';
import Responsive from 'react-responsive';
import { Progress } from 'antd';


const Desktop = ({children}) => <Responsive minWidth={992} children={children}/>;
const Mobile = ({children}) => <Responsive maxWidth={768} children={children}/>;
const Tablet = ({children}) => <Responsive minWidth={768} maxWidth={992} children={children}/>;


class OverallStatus extends React.Component {

  render () {
    return (
      <div>
        <Row>
          <Col span={6}>Jio Mobile</Col>
          <Col span={6}> <Progress percent={30} /></Col>
          <Col span={6}>Airtel TV</Col>
          <Col span={6}><Progress percent={50} status="active" /></Col>
        </Row>
      </div>
    );
  }
}

export default OverallStatus;
