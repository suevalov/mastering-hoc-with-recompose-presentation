import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';

import Spinner from '../Spinner/Spinner';

const identity = t => t;

export default (hasLoaded) => (
    branch(
        hasLoaded,
        identity,
        renderComponent(Spinner)        
    )
);