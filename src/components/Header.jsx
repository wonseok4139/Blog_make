import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <Link to="/" style={{ marginRight: '10px' }}>홈</Link>
            <Link to="/posts" style={{ marginRight: '10px' }}>글 목록</Link>
            <Link to="/new">글 작성</Link>
        </nav>
    );
};

export default Header;
