import React from 'react';
import { Row, Col } from 'antd';

export default class Footer extends React.Component {
  render(){
    return (
      <Row>
        <Col span={ 24 } className="text-center padding-one">
          <footer>
            <a href="http://www.ishantoberoi.com">ishantoberoi.com</a>
          </footer>
        </Col>
      </Row>
    );
  }
}