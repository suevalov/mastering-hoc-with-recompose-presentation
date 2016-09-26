import React from 'react';
import { Row, Col } from 'elemental';
import { Image } from '../../src/spectacle';

const image = require('../images/react-is-a-framework.png');

export default class ReactJSFramework extends React.Component {

  render() {
    return (
      <Row>
        <Col xs="100%">
          <Image src={image} width='100%' />
        </Col>
      </Row>
    );
  }

}
