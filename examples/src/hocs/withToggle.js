import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import withState from 'recompose/withState';

export default compose(
    withState('open', 'setOpen', false),
    mapProps(p => ({
        ...p,
        toggle: e => p.setOpen(o => !o)
    }))
);