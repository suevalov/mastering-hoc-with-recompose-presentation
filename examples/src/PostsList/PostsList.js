import './PostsList.css';

import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withProps from 'recompose/withProps';
import withState from 'recompose/withState';
import React from 'react';

import fetchResource from '../hocs/fetchResource';
import spinnerWhileLoading from '../hocs/spinnerWhileLoading';
import Post from './Post';

const postsMock = [
    { id: 1, title: 'First Post', content: 'Content of first post' },
    { id: 2, title: 'Second Post', content: 'Content of second post' },
    { id: 3, title: 'Third Post' , content: 'Content of third post' }
];

const PostsList = ({ posts }) => ((
    <div>
        <h1>Posts</h1>
        {posts.map((post) => (
            <Post {...post} key={post.id} />
        ))}
    </div>
));

export default compose(
    withProps({
        posts: postsMock
    })
)(PostsList);