import './Post.css';

import React from 'react';
import compose from 'recompose/compose'
import withToggle from '../hocs/withToggle';

const Post = ({ title, content, open, toggle }) => (
    <div className="Post-root" onClick={toggle}>
        <h3 className="Post-header">{title}</h3>
        { open && <div className="Post-content">{content}</div> }
    </div>
);

export default withToggle(Post)