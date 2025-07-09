import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    // 경로 이동 함수
    const handleMove = (path) => {
        console.log(`${path}로 이동 중...`);
        navigate(path);
    };

    return (
        <div>
            <h1>홈입니다</h1>
            <p>아래 버튼을 클릭해 이동해보세요</p>

            <button onClick={() => handleMove('/posts')} style={{ marginRight: '10px' }}>
                글 목록 보기
            </button>

            <button onClick={() => handleMove('/new')}>
                새 글 작성하기
            </button>
        </div>
    );
};

export default Home;

//console.log(`${path}로 이동 중...`); // 백틱 방식 (추천)
// console.log(path + '로 이동 중...'); // 문자열 더하기 (대체 가능)
