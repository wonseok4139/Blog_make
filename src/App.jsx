import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import NewPost from './pages/NewPost';

import { PostProvider } from './context/PostContext'; // ✅ 정확한 import
import Header from './pages/components/Header';
import Footer from './pages/components/Footer';

const App = () => {
    return (
        <PostProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<PostList />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="/new" element={<NewPost />} />
                </Routes>
                <Footer />
            </Router>
        </PostProvider>
    );
};

export default App;
