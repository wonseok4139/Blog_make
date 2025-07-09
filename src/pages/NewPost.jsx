import { useState } from 'react';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // 새로고침 방지
        console.log('제목:', title);
        console.log('내용:', content);
        // 입력값 초기화
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
                /><br /><br />

                <textarea
                    placeholder="내용을 입력하세요"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            // Shift 없이 Enter 눌렀을 때만 등록
                            e.preventDefault(); // 줄바꿈 막기
                            handleSubmit(e);    // 제출 실행
                        }
                    }}
                />


                <button className="btn1" type="submit">등록</button>


            </form>
        </div>
    );
};

export default NewPost;
