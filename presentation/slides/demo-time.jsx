import React from 'react';
import { Row, Col } from 'elemental';
import { Image, Heading } from '../../src/spectacle';

const image = require('../images/ios-android.png');

export default class DemoTime extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired
  };

  render() {
    return (
      <Row>
        <Col xs='2/3'>
          <Heading size={2} textColor='darkPrimary' style={{ marginTop: '180px' }}>Демонстрация</Heading>
        </Col>
        <Col xs='1/3'>
          <Image src={image} width='100%' />
        </Col>
      </Row>
    );
  }

}
