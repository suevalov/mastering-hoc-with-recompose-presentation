import './PostsList.css';

import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withProps from 'recompose/withProps';
import renameProp from 'recompose/renameProp';
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

const fetchPosts = fetchResource(() => (new Promise((resolve) => {
    setTimeout(() => {
        resolve(postsMock);
    }, 1000);
})));

const PostsList = ({ posts, value, onChange }) => ((
    <div>
        <h1>Posts</h1>
        <input type="text" className="PostsList-searchInput" onChange={onChange} value={value} />
        {posts.map((post) => (
            <Post {...post} key={post.id} />
        ))}
    </div>
));

export default compose(
    fetchPosts,
    renameProp('resource', 'posts'),
    spinnerWhileLoading((props) => props.hasLoaded),
    withState('value', 'setValue', ''),
    withHandlers({
        onChange: (props) => (e) => props.setValue(e.target.value)
    }),
    withProps((props) => {
        let posts = props.posts;
        if (props.value) {
            posts = props.posts.filter((post) => post.title.toLowerCase().indexOf(props.value.toLowerCase()) !== -1);
        }
        return {
            posts
        };
    })
)(PostsList);