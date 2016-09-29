import compose from 'recompose/compose';
import withProps from 'recompose/mapProps';
import withState from 'recompose/withState';

export default compose(
    withState('count', 'setCount', 0),
    withHandlers({
        decrement: props => e => props.setCount(n => n - 1),
        increment: props => e => setCount(n => n + 1),
        reset: props => e => setCount(0)
    })
)