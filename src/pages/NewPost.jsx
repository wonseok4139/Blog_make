import { useState } from 'react';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('제목:', title);
        console.log('내용:', content);
    };

    return (
        <div>
            <h1>새 글 작성</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /><br />
                <textarea
                    placeholder="내용"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                /><br />
                <button type="submit">등록</button>
            </form>
        </div>
    );
}

export default NewPost;
