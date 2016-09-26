import React from 'react';
import { List, ListItem, Heading, Image } from '../../src/spectacle';
import { Row, Col } from 'elemental';
import stepped from '../stepped';
import { VelocityComponent } from 'velocity-react';

@stepped(5)
export default class BulletHardNativeApps extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired,
    onUpdateStep: React.PropTypes.func.isRequired,
    image: React.PropTypes.string.isRequired
  };

  renderList() {
    const { step } = this.props;

    return (
      <List>
        <VelocityComponent
          animation={{
            opacity: (() => {
              if (step < 1) {
                return 0;
              }
              if (step === 1 || step === 4) {
                return 1;
              }
              return 0.3;
            }())
          }}
          duration={500}>
          <ListItem>Разный стек технологий</ListItem>
        </VelocityComponent>
        <VelocityComponent
          animation={{
            opacity: (() => {
              if (step < 2) {
                return 0;
              }
              if (step === 2 || step === 4) {
                return 1;
              }
              return 0.3;
            }())
          }}
          duration={500}>
          <ListItem>Нет переиспользования кода</ListItem>
        </VelocityComponent>
        <VelocityComponent
          animation={{
            opacity: (() => {
              if (step < 3) {
                return 0;
              }
              if (step === 3 || step === 4) {
                return 1;
              }
              return 0.3;
            }())
          }}
          duration={500}>
          <ListItem>Билд на каждое изменение</ListItem>
        </VelocityComponent>
      </List>
    );
  }

  renderImage() {
    return (
      <VelocityComponent
        animation={{
          opacity: this.props.step > 0 ? 1 : 0,
          marginRight: this.props.step > 0 ? '0' : '-50'
        }}
        duration={500}>
        <Image src={this.props.image} width='100%'/>
       </VelocityComponent>
    );
  }

  render() {
    const styles = {
      heading: {
        marginTop: '-100px'
      },
      row: {
        marginTop: '60px'
      }
    };

    return (
      <div>
        <Row>
          <Col>
            <Heading size={3} textColor="darkPrimary" style={styles.heading}>Почему это сложно?</Heading>
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col xs='2/3'>
            { this.renderList() }
          </Col>
          <Col xs='1/3'>
            { this.renderImage() }
          </Col>
        </Row>
      </div>
    );
  }

}
