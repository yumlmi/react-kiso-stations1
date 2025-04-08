import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {GetThreadList} from './GetThreadList.jsx'
import { MakeThreadList } from './MakeThreadList.jsx';
import { GetThreadPosts } from './GetThreadPosts.jsx'; 

function App() {
  //const [count, setCount] = useState(0)

  const [showForm, setShowForm] = useState(false); // フォーム表示状態

  const handleClick = () => {
    setShowForm((prev) => !prev); // 押すたびに切り替え
  };

  return (
    <>
    <Router>
    <header>
      <h1>掲示板</h1>
        <Link to="/threads/new">
          <button className="create-button">スレッド新規作成</button>
        </Link>
    </header>
    <div style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/" element={
            <>
              <p>・新着スレッド</p>
              <GetThreadList />
            </>
          } />
          <Route path="/threads/new" element={<MakeThreadList />} />
          <Route path="/threads/:thread_id" element={<GetThreadPosts />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
