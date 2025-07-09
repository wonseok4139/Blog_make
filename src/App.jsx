// App.jsx
import React from 'react';
// 리액트에 수입 한다.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Router -> Routes -> Route  순서
import Home from './pages/Home';
// Home 수입 한다.  ->  홈 화면
import PostList from './pages/PostList';
// PostList 수입 한다. ->글 목록을 보여줌
import PostDetail from './pages/PostDetail';
// PostDetail 수입한다. -> 상제 조회
import NewPost from './pages/NewPost';
// NewPost 수입한다. -> 사용자가 입력하는 새로운 값

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<PostList />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="/new" element={<NewPost />} />
            </Routes>
        </Router>
    );
}

export default App;
