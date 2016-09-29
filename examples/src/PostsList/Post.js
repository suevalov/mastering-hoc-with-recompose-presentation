import './Post.css';

import React from 'react';

const Post = ({ title, content }) => (
    <div className="Post-root">
        <h3 className="Post-header">{title}</h3>
        <div className="Post-content">{content}</div>
    </div>
);

export default Post