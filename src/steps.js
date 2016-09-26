import _ from 'lodash';

let slideSteps = {};

export function register(slideIndex, { prev, next }) {
  const noop = () => true;
  slideSteps = {
    ...slideSteps,
    [slideIndex]: {
      prevStep: prev || noop,
      nextStep: next || noop
    }
  };
}

export function unregister(slideIndex) {
  slideSteps = _.omit(slideSteps, slideIndex);
}

export function prevStep(slideIndex) {
  const steps = slideSteps[slideIndex];
  if (steps) {
    return steps.prevStep();
  }
  return true;
}

export function nextStep(slideIndex) {
  const steps = slideSteps[slideIndex];
  if (steps) {
    return steps.nextStep();
  }
  return true;
}
