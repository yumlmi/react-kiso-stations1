import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './GetThreadPosts.css'

export const GetThreadPosts = () => {
  const { thread_id } = useParams();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const getPosts = async () => {
    try {
      const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`);
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts);
      } else {
        alert('正常なレスポンスではありません');
      }
    } catch (error) {
      alert('通信上の問題が発生しています');
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, [thread_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPost.trim() === '') {
      alert('投稿内容を入力してください');
      return;
    }

    try {
      const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post: newPost }),
      });

      if (response.ok) {
        setNewPost('');
        getPosts();
      } else {
        alert('投稿に失敗しました');
      }
    } catch (error) {
      alert('通信エラーが発生しました');
      console.error(error);
    }
  };

  return (
    <div className="post-wrapper">
      <h2>投稿一覧</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="投稿内容"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button type="submit">投稿</button>
      </form>
      <ul>
        {posts.map((data) => (
          <li key={data.id}>
            {data.post}
          </li>
        ))}
      </ul>
    </div>
  );
};
