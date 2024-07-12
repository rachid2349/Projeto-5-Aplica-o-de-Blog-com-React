import React, { useState } from 'react';
import PostList from './components/PostList';

function App() {
    const [posts, setPosts] = useState([]);

    const addPost = () => {
        const title = prompt('Título do Post:');
        const content = prompt('Conteúdo do Post:');
        setPosts([...posts, { title, content }]);
    };

    return (
        <div>
            <h1>Blog</h1>
            <button onClick={addPost}>Adicionar Post</button>
            <PostList posts={posts} />
        </div>
    );
}

export default App;
