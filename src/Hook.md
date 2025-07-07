화면에 <input>이 보임.

사용자가 키보드로 "블로그 글" 입력함.

onChange가 감지함 → handleChange() 실행됨.

handleChange에서 setTitle("블로그 글") 호출됨.

title 값이 "블로그 글"로 바뀌고, 화면이 자동으로 다시 렌더링됨.

const [title, setTitle] = useState('');
setTitle('블로그 제목');
