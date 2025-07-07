// PostDetail.jsx 오류 수정용 버전 (에러: 'id is not defined')
// 원인: useParams()가 정상적으로 import되지 않았거나, 구조분해 할당이 잘못되었을 가능성 있음
// useParams이란?? => React Router에서 제공하는 훅(Hook)입니다.
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const params = useParams();
    const id = params.id; // 또는 const { id } = useParams(); 가능

    return (
        <div>
            <h1>게시글 상세 페이지</h1>
            <p>이 글의 ID는 {id} 입니다.</p>
        </div>
    );
};

export default PostDetail;
