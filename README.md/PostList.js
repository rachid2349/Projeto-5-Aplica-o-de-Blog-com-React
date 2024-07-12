import React from 'react';
import Post from './Post';

function PostList({ posts }) {
    return (
        <div>
            {posts.map((post, index) => (
                <Post key={index} title={post.title} content={post.content} />
            ))}
        </div>
    );
}

export default PostList;
