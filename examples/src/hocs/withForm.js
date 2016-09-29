import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

const withForm = withState('form', 'setForm', {})

export default compose(
    withState('form', 'setForm', {}),
    withHandlers({
        onChange: props => e => {
            const { type, name, value, checked } = e.target
            const val =
            /number|range/.test(type)
            ? parseFloat(value)
            : /checkbox/.test(type)
            ? checked
            : /radio/.test(type) // is this needed?
            ? value
            : value;
            props.setForm({
                ...form,
                [name]: val
            });
        },
        onSubmit: props => e => {
            e.preventDefault()
            props.onSubmit(form)
        },
    })
)