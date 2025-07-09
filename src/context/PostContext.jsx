// Context API 사용
// React의 Context를 활용해서
// NewPost, PostList, PostDetail 등 모든 페이지에서 같은 상태(posts) 를 공유할 수 있도록 만들 거예요.

import { createContext, useContext, useState } from 'react';

// 1. 컨텍스트 생성
const PostContext = createContext();

// 2. Provider 컴포넌트
export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([
        { id: 1, title: '첫 번째 글', content: '내용입니다.' },
        { id: 2, title: '두 번째 글', content: '또 다른 내용입니다.' },
        { id: 3, title: '세 번째 글', content: '세 번째 이야기입니다.' },
    ]);

    // 글 추가 함수
    const addPost = (newPost) => {
        setPosts((prev) => [...prev, newPost]);
    };

    return (
        <PostContext.Provider value={{ posts, addPost }}>
            {children}
        </PostContext.Provider>
    );
};

// 3. 다른 컴포넌트에서 쉽게 사용할 수 있도록 커스텀 훅
export const usePostContext = () => useContext(PostContext);


/*
const PostContext = createContext(); ->  PostContext 같은 전역 공유 공간을 만들어냅니다.

const { posts } = useContext(PostContext); -> 위에서 만든 PostContext에서 데이터를 꺼내서 사용하는 도구예요.

const [posts, setPosts] = useState([]); ->  컴포넌트 안에서 상태(state)를 만들고 관리할 수 있게 해주는 훅입니다.
 */
