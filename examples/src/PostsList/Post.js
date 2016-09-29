import React from 'react';
import './Post.css';
import compose from 'recompose/compose';
import withToggle from '../hocs/withToggle';

const Post = ({ title, content, toggle, open }) => (
    <div className="Post-root" onClick={toggle}>
        <h3 className="Post-header">{title}</h3>
        {open && <div className="Post-content">{content}</div>}
    </div>
);

export default compose(
    withToggle
)(Post)