import { useParams } from 'react-router-dom';

// 더미 데이터 (PostList와 동일)
const dummyPosts = [
    { id: 1, title: '첫 번째 글', content: '내용입니다.' },
    { id: 2, title: '두 번째 글', content: '또 다른 내용입니다.' },
    { id: 3, title: '세 번째 글', content: '세 번째 이야기입니다.' },
];

const PostDetail = () => {
    const { id } = useParams();         // URL에서 id 가져오기
    const postId = parseInt(id);        // 문자열 → 숫자 변환
    const post = dummyPosts.find((item) => item.id === postId); // 해당 게시글 찾기

    if (!post) {
        return <div>존재하지 않는 게시글입니다.</div>; // 예외 처리
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostDetail;


// 배열이름.find((요소) => 조건)  ※이건 JavaScript의 배열 함수 find()의 문법이에요.※
