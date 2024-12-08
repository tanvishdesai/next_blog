"use client";
import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [posts, setPosts] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data: string[]) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  const handlePost = () => {
    if (!inputValue.trim()) return;

    fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: inputValue }),
    })
      .then((res) => res.json())
      .then(() => {
        setPosts((prevPosts) => [...prevPosts, inputValue]);
        setInputValue("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">My Blog</h1>
        <div className="mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Write something..."
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          />
          <button
            onClick={handlePost}
            className="w-full bg-purple-500 text-white p-3 rounded-md hover:bg-blue-600"
          >
            Post
          </button>
        </div>
        <div>
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-3"
            >
              {post}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
