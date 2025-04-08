import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './GetThreadPosts.css'

export const GetThreadPosts = () => {
  const { thread_id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getThreadPosts = async () => {
      try {
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`);
        if (response.ok) {
          const datas = await response.json();
          console.log(datas);
          setPosts(datas.posts);
        } else {
          alert('正常なレスポンスではありません');
        }
      } catch (error) {
        alert('通信上の問題が発生しています');
        console.error(error);
      }
    };

    getThreadPosts();
  }, [thread_id]);

  return (
    <div>
      <h2>投稿一覧（スレッドID: {thread_id}）</h2>
      <ul>
        {posts.map((data) => (
          <li key={data.id}>
            title:{data.post}
          </li>
        ))}
      </ul>
    </div>
  );
};
