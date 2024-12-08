import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [posts, setPosts] = useState<string[]>([]);

    useEffect(() => {
        fetch('/api/posts')
            .then((res) => res.json())
            .then((data: string[]) => setPosts(data))
            .catch((err) => console.error(err));
    }, []);

    const handlePost = () => {
        if (!inputValue.trim()) return;

        fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: inputValue }),
        })
            .then((res) => res.json())
            .then(() => {
                setPosts((prevPosts) => [...prevPosts, inputValue]);
                setInputValue('');
            })
            .catch((err) => console.error(err));
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
            <h1>Blog</h1>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Write something..."
                    style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
                />
                <button onClick={handlePost} style={{ width: '100%', padding: '8px' }}>
                    Post
                </button>
            </div>
            <div style={{ marginTop: '20px' }}>
                {posts.map((post, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ddd',
                            padding: '10px',
                            marginBottom: '10px',
                            borderRadius: '5px',
                        }}
                    >
                        {post}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
