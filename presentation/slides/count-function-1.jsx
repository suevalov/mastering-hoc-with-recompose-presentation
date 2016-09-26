import React from 'react';
import { Row, Col } from 'elemental';
import { Image } from '../../src/spectacle';
import stepped from '../stepped';

const images = [
  require('../images/ui-f-count.jpg'),
  require('../images/ui-f-count-2.jpg'),
  require('../images/ui-f-count-3.jpg'),
  require('../images/ui-f-count-4.jpg'),
  require('../images/ui-f-count-5.jpg'),
  require('../images/ui-f-count-6.jpg')
];

@stepped(6)
export default class CountFunction1 extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired
  };

  render() {
    return (
      <Row>
        <Col>
          <Image src={images[this.props.step]} width="90%" />
        </Col>
      </Row>
    );
  }

}
