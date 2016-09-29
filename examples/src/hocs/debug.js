import React from 'react';
import toClass from 'recompose/toClass';

export default function debug(WrappedComponent) {

  if (typeof WrappedComponent === 'function') {
    WrappedComponent = toClass(WrappedComponent);
  }

  return class Enhancer extends WrappedComponent {
    render() {
      return (
        <div>
          <h2>Debugger Component</h2>
          <p>Props</p> <pre>{JSON.stringify(this.props, null, 2)}</pre>
          <p>State</p><pre>{JSON.stringify(this.state, null, 2)}</pre>
          {super.render()}
        </div>
      )
    }
  }
}