import React from 'react';
import { Layout, Fill, Heading, Image } from '../../src/spectacle';

export default class WhyDoWeLoveNativeApps extends React.Component {

  static propTypes = {
    like: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <Layout>
        <Fill>
          <Heading size={2} textColor='darkPrimary'>Почему нам так нравятся</Heading>
          <Image src={this.props.like} width='30%' />
          <Heading size={2} textColor='darkPrimary'>нативные приложения?</Heading>
        </Fill>
      </Layout>
    );
  }

}
