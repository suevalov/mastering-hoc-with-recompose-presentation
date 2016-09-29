import React from 'react';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import fetchResource from '../hocs/fetchResource';
import spinnerWhileLoading from '../hocs/spinnerWhileLoading';

import Post from './Post';

const PostsList = ({ posts, value, onChange }) => ((
    <div>
        <h1>Posts</h1>
        <input type="text"  value={value} onChange={onChange} />
        {posts.map((post) => (
            <Post {...post} key={post.id} />
        ))}
    </div>
));

const fetchPosts = fetchResource(() => new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            { id: 1, title: 'First Post', content: 'Content of first post' },
            { id: 2, title: 'Second Post', content: 'Content of second post' },
            { id: 3, title: 'Third Post' , content: 'Content of third post' }
        ])
    }, 
    2000);
}));

export default compose(
    fetchPosts,
    spinnerWhileLoading(props => props.hasLoaded),
    withState('value', 'setValue', ''),
    withHandlers({
        onChange: (props) => (e) => {
            props.setValue(e.target.value);
        }
    }),
    withProps((props) => {
        let posts = props.resource || [];
        
        if (props.value) {
            const lValue = props.value.toLowerCase();
            posts = posts.filter(post => post.title.toLowerCase().indexOf(lValue) !== -1);
        }
        return {
            posts
        };
    })
)(PostsList);