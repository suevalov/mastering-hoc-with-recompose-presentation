import React from 'react';
import { Row, Col } from 'elemental';
import { Heading, Image } from '../../src/spectacle';

const redBluePill = require('../images/red-blue-pill.png');

export default class BothAreImportant extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired,
    onUpdateStep: React.PropTypes.func.isRequired,
  };

  render() {
    const styles = {
      heading: {
        size: 4,
        textColor: 'light',
        marginBottom: '-100px'
      }
    };

    return (
      <Row>
        <Col>
          <Heading {...styles.heading}>
            это
          </Heading>
          <Heading {...styles.heading}>
            одинаково
          </Heading>
          <Heading {...styles.heading}>
            важно
          </Heading>
          <Image src={redBluePill.replace('/', '')} width='300px'/>
        </Col>
      </Row>
    );
  }

}
