import React, { Component } from 'react';

import { Link } from 'spectacle';

class Suevalov extends Component {

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
      <div>
        { this.renderMe() }
        <div>
          <Link href="http://suevalov.com" style={{ fontSize: '1.2em' }} target="__blank">
            Alex Suevalov
          </Link>
        </div>
        <div>
          <Link href="https://twitter.com/Suevalov" style={{ fontSize: '1.2em' }} target="__blank">
            @suevalov
          </Link>
        </div>
        <div>
          <Link href="http://dataart.com/" style={{ fontSize: '1.2em' }} target="__blank">
            DataArt
          </Link>
        </div>
      </div>
    );
  }

}

Suevalov.propTypes = {
  photo: React.PropTypes.string.isRequired
};

export default Suevalov;
