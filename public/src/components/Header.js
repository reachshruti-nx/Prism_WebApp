import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import Responsive from 'react-responsive';

export default class Header extends React.Component {

  handleChange (e) {
    this.props.passedChangeTitle(e.target.value);
  }

  render () {
    return (
      <div>
        <Row>
          <Col span={ 24 } className="text-center padding-one">
          <h2>Project Tracking Tool</h2>
          </Col>
        </Row>
      </div>
    );
  }
}