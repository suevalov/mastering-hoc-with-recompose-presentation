import React from 'react';
import { Row, Col } from 'elemental';
import { Heading, Image } from '../../src/spectacle';

export default class WebSolvesThisProblem extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired,
    onUpdateStep: React.PropTypes.func.isRequired,
    image: React.PropTypes.string.isRequired
  };

  render() {
    const styles = {
      image: {
        src: this.props.image,
        width: '30%'
      },
      heading: {
        size: 3,
        textColor: 'light'
      }
    };

    return (
      <div>
        <Row>
          <Col>
            <Image {...styles.image} />
            <Heading {...styles.heading}>
              Web <br/> решает эти проблемы
            </Heading>
          </Col>
        </Row>
      </div>
    );
  }

}
