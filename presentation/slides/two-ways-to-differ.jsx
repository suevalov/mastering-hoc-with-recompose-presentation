import React from 'react';
import { Row, Col } from 'elemental';
import { Heading, CodePane } from '../../src/spectacle';
import stepped from '../stepped';
import { VelocityComponent } from 'velocity-react';


@stepped(3)
export default class TwoWaysToDiffer extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <Row>
          <Col>
            <Heading size={4} textColor='light'>Два способа разделять <br />платформозависимую логику</Heading>
          </Col>
        </Row>
        <Row>
          <Col xs='1/4' />
          <Col xs='1/2'>
            <div style={{ position: 'relative', width: '100%', height: '300px' }}>
              <VelocityComponent
                animation={{
                  opacity: step > 0 ? 1 : 0,
                  marginBottom: step > 0 ? '0' : '-100'
                }}
                duration={500}>
                <CodePane
                  lang='javascript'
                  source={require('raw!../code/differ-one.js.example')}
                  margin='20px 0px 0px 0px' />
              </VelocityComponent>
              <VelocityComponent
                animation={{
                  opacity: step > 1 ? 1 : 0,
                  marginBottom: step > 1 ? '0' : '-100'
                }}
                duration={500}>
                <CodePane
                  lang='javascript'
                  source={require('raw!../code/differ-two.js.example')}
                  margin='20px 0px 0px 0px' />
              </VelocityComponent>
            </div>
          </Col>
          <Col xs='1/4' />
        </Row>
      </div>

    );
  }

}
