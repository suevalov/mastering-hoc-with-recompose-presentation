import React, { Component } from 'react';

import { Link } from '../../src/spectacle';

export default class Suevalov extends Component {

  static propTypes = {
    photo: React.PropTypes.string
  }

  renderMe() {
    const styles = {
      'margin': '10px auto',
      'width': '130px',
      'height': '130px',
      'borderRadius': '60px'
    };
    return (
        <div style={{ display: 'inline-block', width: '400px' }}>
          <img src={this.props.photo} style={styles} />
        </div>
    );
  }

  render() {
    return (
      <div className="suevalovComponent">
        { this.renderMe() }
        <div>
          <Link href="http://suevalov.com">
            Александр Суевалов&nbsp;&nbsp;&nbsp;http://suevalov.com/
          </Link>
        </div>
        <div>
          <Link href="http://dataart.com/">
            DataArt
          </Link>
        </div>
      </div>
    );
  }

}
