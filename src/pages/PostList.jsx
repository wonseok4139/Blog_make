import { Link } from 'react-router-dom';

// 더미 데이터 정의
const dummyPosts = [
    { id: 1, title: '첫 번째 글', content: '첫 번째 내용입니다.' },
    { id: 2, title: '두 번째 글', content: '두 번째 내용입니다.' },
    { id: 3, title: '세 번째 글', content: '세 번째 내용입니다.' },
];

const PostList = () => {
    return (
        <div>
            <h1>글 목록</h1>
            <ul>
                {dummyPosts.map((post) => (
                    <li key={post.id}>
                        {/* 글 제목에 링크 연결 */}
                        {/*content 없는 이유는 가독성을 위해 -> 상세페이지인 Detail에서 다룰 예정*/}
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
