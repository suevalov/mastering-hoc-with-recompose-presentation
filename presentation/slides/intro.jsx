import React from 'react';
import { Heading, Image, Layout, Fill } from '../../src/spectacle';
import { Suevalov } from '../components';

export default class IntroSlide extends React.Component {

  static propTypes = {
    logo: React.PropTypes.string.isRequired,
    photo: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <Layout>
          <Fill>
            <Image src={this.props.logo} width='270px' />
          </Fill>
        </Layout>
        <Layout>
          <Fill>
            <Heading size={1} caps textColor='darkPrimary'>
              React Native
            </Heading>
            <Heading size={6} fontNormal textColor='darkPrimary'>
              Создаем нативные приложения для iOS и Android
            </Heading>
          </Fill>
        </Layout>
        <Suevalov photo={this.props.photo} />
      </div>
    );
  }

}
