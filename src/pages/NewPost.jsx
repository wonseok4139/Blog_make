import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostContext } from '../context/PostContext';

const NewPost = () => {
    const { addPost } = usePostContext();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // 콘솔에 입력값 출력
        console.log('✅ 입력된 제목:', title); <br/>
        console.log('✅ 입력된 내용:', content);

        // 실제 글 추가
        const newPost = {
            id: Date.now(), // 고유 ID
            title,
            content,
        };

        addPost(newPost); // 전역 상태에 추가
        navigate('/posts'); // 목록 페이지로 이동

        // 입력값 초기화 (선택사항)
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <h1>새 글 작성</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ marginBottom: '20px' }} // ✅ 여기 추가!
                />
                <br />
                <textarea
                    placeholder="내용을 입력하세요"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{ marginBottom: '20px' }} // ✅ 간격 주기!
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault(); // ✅ Enter의 기본 동작(줄바꿈)을 막는다
                            // 필요하면 여기서 등록 함수 실행도 가능
                             handleSubmit(e); // ← 자동 등록되게도 가능
                        }
                    }}
                />
                <br />
                <button type="submit">등록</button>
            </form>
        </div>
    );
};

export default NewPost;
