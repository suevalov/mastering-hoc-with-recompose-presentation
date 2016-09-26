import React from 'react';
import { register, unregister } from '../src/steps';

export default (maxStep) => {
  return (DecoratedComponent) => {
    return class SlideSteps extends React.Component {

        static propTypes = {
          index: React.PropTypes.number.isRequired
        };

        constructor(props) {
          super(props);
          this.state = {
            step: 0,
            maxStep: maxStep - 1
          };
        }

        componentWillMount() {
          register(this.props.index, {
            prev: () => {
              if (this.state.step > 0) {
                this.setState({ step: this.state.step - 1 });
                return false;
              }
              return true;
            },
            next: () => {
              if (this.state.step < this.state.maxStep) {
                this.setState({ step: this.state.step + 1 });
                return false;
              }
              return true;
            }
          });
        }

        componentWillUnmount() {
          unregister(this.props.index);
        }

        onUpdateStep = (step) => {
          if (step >= 0 && step <= this.state.maxStep) {
            this.setState({ step });
          }
        }

        render() {
          return <DecoratedComponent {...this.props} step={this.state.step} onUpdateStep={this.onUpdateStep} />;
        }

    };
  };
};
