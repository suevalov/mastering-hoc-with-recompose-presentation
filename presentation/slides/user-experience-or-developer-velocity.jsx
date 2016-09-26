import React from 'react';
import { Row, Col } from 'elemental';
import { Heading, Image } from '../../src/spectacle';
import { VelocityComponent } from 'velocity-react';
import stepped from '../stepped';

const bluePill = require('../images/blue-pill.png');
const redPill = require('../images/red-pill.png');

@stepped(3)
export default class UserExperinceOrDeveloperVelocity extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired,
    onUpdateStep: React.PropTypes.func.isRequired,
  };

  render() {
    const styles = {
      version: {
        size: 3,
        textColor: 'light'
      },
      or: {
        size: 1,
        caps: true,
        textColor: 'light',
        style: {
          fontSize: '16em',
          fontWeight: 'bold',
          marginTop: '160px'
        }
      }
    };

    return (
      <Row>
        <Col xs='40%'>
          <VelocityComponent
            animation={{
              opacity: this.props.step > 0 ? 1 : 0
            }}>
            <div>
              <Heading {...styles.version}>
                User Experience
              </Heading>
              <Image src={bluePill.replace('/', '')} width='60%'/>
            </div>
          </VelocityComponent>
        </Col>
        <Col xs='20%'>
          <Heading {...styles.or}>
            ?
          </Heading>
        </Col>
        <Col xs='40%'>
          <VelocityComponent
            animation={{
              opacity: this.props.step > 1 ? 1 : 0
            }}>
            <div>
              <Heading {...styles.version}>
                Developer Experience
              </Heading>
              <Image src={redPill.replace('/', '')} width='60%' />
            </div>
          </VelocityComponent>
        </Col>
      </Row>
    );
  }

}
