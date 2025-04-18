import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GetThreadList.css'

export const GetThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const getThreadList = async () => {
      try {
        const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads');
        if (response.ok) {
          const datas = await response.json();
          setThreads(datas);
        } else {
          alert('正常なレスポンスではありません');
        }
      } catch (error) {
        alert('通信上の問題が発生しています');
        console.error(error);
      }
    };

    getThreadList();
  }, []);

  return (
    <div>
      <ul>
        {threads.map((data) => (
          <li key={data.id}>
            <Link to={`/threads/${data.id}`} className="thread-link">
               title: {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
