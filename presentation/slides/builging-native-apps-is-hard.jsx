import React from 'react';
import { Heading } from '../../src/spectacle';
import stepped from '../stepped';
import { VelocityComponent } from 'velocity-react';

@stepped(2)
export default class BuildingNativeAppsIsHard extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired,
    onUpdateStep: React.PropTypes.func.isRequired,
    image: React.PropTypes.string.isRequired
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <Heading size={2} textColor='primary' style={{ marginTop: '-100px'}}>Ho...</Heading>
        <VelocityComponent
          animation={{
            opacity: step > 0 ? 1 : 0,
            marginBottom: step > 0 ? '0' : '-100'
          }}
          duration={500}>
          <Heading size={2} textColor='primary'>
            ...cоздание нативных приложений это сложно
          </Heading>
        </VelocityComponent>
      </div>
    );
  }

}
