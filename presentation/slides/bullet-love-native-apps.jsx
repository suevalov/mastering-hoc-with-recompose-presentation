import React from 'react';
import { Row, Col } from 'elemental';
import { Heading, Image, List, ListItem } from '../../src/spectacle';
import { VelocityComponent } from 'velocity-react';
import stepped from '../stepped';

@stepped(2)
export default class BulletLoveNativeApps extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired,
    onUpdateStep: React.PropTypes.func.isRequired,
    image: React.PropTypes.string.isRequired
  };

  renderImage() {
    return (
      <VelocityComponent
        animation={{
          opacity: this.props.step > 0 ? 1 : 0,
          marginRight: this.props.step > 0 ? '0' : '-50'
        }}
        duration={500}>
        <Image src={this.props.image} width="100%"/>
      </VelocityComponent>
    );
  }

  renderBullets() {
    return (
      <List>
        <ListItem>Быстрые и отзывчивые</ListItem>
        <ListItem>Сложные жесты</ListItem>
        <ListItem>Нетривиальные анимации</ListItem>
        <ListItem>Консистентный UI</ListItem>
      </List>
    );
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Heading size={3} textColor='darkPrimary' style={{ marginTop: '-150px' }}>Нативные приложения</Heading>
          </Col>
        </Row>
        <Row>
          <Col xs='2/3'>
            { this.renderBullets() }
          </Col>
          <Col xs='1/3'>
            { this.renderImage() }
          </Col>
        </Row>
      </div>
    );
  }

}
