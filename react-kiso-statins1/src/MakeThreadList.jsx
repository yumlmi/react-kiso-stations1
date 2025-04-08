import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GetThreadList.css'

export const MakeThreadList = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault(); // ページリロード防止
    if (title.trim() === '') {
      alert('タイトルを入力してください');
      return;
    }

    try {
      const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      if (response.ok) {
        alert('スレッドを作成しました！');
        setTitle('');
        navigate('/');
      } else {
        alert('スレッドの作成に失敗しました');
      }
    } catch (error) {
      alert('通信エラーが発生しました');
      console.error(error);
    }
  };


  return (
    <div>
        <p>スレッド新規作成</p>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="スレッドタイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">作成</button>
      </form>
    </div>
  );
};
