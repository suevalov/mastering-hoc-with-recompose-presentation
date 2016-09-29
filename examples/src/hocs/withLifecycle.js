import { Component } from 'react';
import createEagerFactory from 'recompose/createEagerFactory';

const onLifecycleMethod = (lifecycle = {}) => (WrappedComponent) => {
  const factory = createEagerFactory(WrappedComponent);
  return class extends Component {

    constructor(props) {
      super(props);
      Object.keys(lifecycle).forEach((lifecycleMethod) => {
        this[lifecycleMethod] = (...args) => lifecycle[lifecycleMethod](props, ...args);
      });
    }

    render() {
      return factory({ ...this.props });
    }

  };
};

export default onLifecycleMethod;