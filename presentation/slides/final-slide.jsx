import React from 'react';
import { Heading } from '../../src/spectacle';

export default class FinalSlide extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired,
    onUpdateStep: React.PropTypes.func.isRequired,
    image: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <div className='thanksSlide'>
        <Heading size={3} textColor='primary'>Спасибо</Heading>
        <div className='thanksSlide__links'>
          <a href="http://suevalov.com/" target="__blank">Александр Суевалов</a>
          <a href="http://dataart.com/" target="__blank">DataArt</a>
          <a href="mailto:suevalov.me@gmail.com">suevalov.me@gmail.com</a>
          <a href="https://github.com/suevalov" target="__blank" className="github">http://github.com/suevalov</a>
          <a href="https://twitter.com/Suevalov" target="__blank" className="twitter">http://twitter.com/Suevalov</a>
        </div>
      </div>
    );
  }

}
