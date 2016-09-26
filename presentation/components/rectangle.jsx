import React, { Component } from 'react';

export default class Rectangle extends Component {

  static propTypes = {
    children: React.PropTypes.any
  }

  render() {
    const styles = {
      'backgroundColor': '#49848E',
      'padding': '15px 15px',
      'height': '200px',
      'width': '350px',
      'borderRadius': '50px',
      'margin': '20px'
    };
    const stylesInner = {
      'height': '170px',
      'width': '320px',
      'borderRadius': '35px',
      'backgroundColor': '#A9ECF8',
      'textAlign': 'center',
      'lineHeight': '170px',
      'color': '#49848E',
      'fontSize': '40px'
    };
    return (
      <div style={styles}>
        <div style={stylesInner}>
          {this.props.children}
        </div>
      </div>
    );
  }

}
