import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import NewPost from './pages/NewPost';
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} /> {/* 첫 화면 */}
                <Route path="/posts" element={<PostList />} /> {/* 글 목록 */}
                <Route path="/posts/:id" element={<PostDetail />} />  {/* 특정 게시글의 상세 내용을 보여줌 */}
                <Route path="/new" element={<NewPost />} /> {/* 새 게시글을 작성할 수 있는 입력 폼 제공 */}
            </Routes>
        </Router>
    );
}

export default App;
