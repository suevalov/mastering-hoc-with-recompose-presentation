import React from 'react';
import { Row, Col } from 'elemental';
import { Heading, List, ListItem, Image } from '../../src/spectacle';
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';
import stepped from '../stepped';

@stepped(3)
export default class HowWebSolvedTheProblems extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired,
    onUpdateStep: React.PropTypes.func.isRequired,
    image: React.PropTypes.string.isRequired
  };

  renderNativeList() {
    const { step } = this.props;

    const animationForStep = (index, text) => {
      let opacity;
      let textDecoration = 'line-through';
      if (step < index) {
        opacity = 0.3;
      } else {
        opacity = 1;
      }
      if (step > index - 1) {
        textDecoration = 'line-through';
      } else {
        textDecoration = 'none';
      }
      const props = {
        textSize: '2.6em',
        style: {
          textDecoration
        }
      };
      return (
        <VelocityComponent
          animation={{
            opacity
          }}>
          <ListItem {...props}>{ text }</ListItem>
        </VelocityComponent>
      );
    };

    return (
      <List>
        <ListItem textSize='2.6em' style={{ textDecoration: 'line-through' }}>Разный стек технологий</ListItem>
        { animationForStep(1, 'Нет переиспользования кода') }
        { animationForStep(2, 'Билд на каждое изменение') }
      </List>
    );
  }

  renderWebList() {
    const { step } = this.props;


    const firstStep = (
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        <Image src={this.props.image} width='70%' />
      </div>
    );

    const secondStep = (
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        <Heading textColor='light' size={1} style={{ fontWeight: '700' }}>
          ∞
        </Heading>
        <Heading textColor='light' size={2} style={{ fontWeight: '700' }}>
           JS библиотек
        </Heading>
      </div>
    );

    const thirdStep = (
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        <Heading textColor='light' size={4} style={{ fontWeight: '700' }}>
          Изменить
        </Heading>
        <Heading textColor='light' size={1}>
          ▾
        </Heading>
        <Heading textColor='light' size={4} style={{ fontWeight: '700' }}>
          Обновить
        </Heading>
      </div>
    );

    const enterAnimation = {
      animation: {
        opacity: 1,
        translateX: '0px'
      }
    };

    const leaveAnimation = {
      animation: {
        opacity: 0,
        translateX: '-40px'
      }
    };

    return (
      <div style={{ position: 'relative' }}>
        <VelocityTransitionGroup enter={enterAnimation} leave={leaveAnimation}>
          { step === 0 ? firstStep : null }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={enterAnimation} leave={leaveAnimation}>
        { step === 1 ? secondStep : null }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={enterAnimation} leave={leaveAnimation}>
        { step === 2 ? thirdStep : null }
        </VelocityTransitionGroup>
      </div>
    );
  }

  render() {
    const styles = {
      header: {
        size: 3,
        textColor: 'darkPrimary',
        style: {
          marginTop: '-100px',
          marginBottom: '100px'
        }
      },
      lightHeader: {
        size: 3,
        textColor: 'light',
        style: {
          marginTop: '-100px',
          marginBottom: '100px'
        }
      }
    };

    return (
      <div>
        <Row>
          <Col xs="1/2">
            <Heading {...styles.header}>Native</Heading>
            { this.renderNativeList() }
          </Col>
          <Col xs="1/2">
            <Heading {...styles.lightHeader}>
              Web
            </Heading>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', width: '100%' }}>
                { this.renderWebList() }
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

}
