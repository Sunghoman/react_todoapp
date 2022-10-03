import './style.css'

import List from '../list/List';

import { useRef, useEffect } from 'react';



const Form = ({ posts, setPosts, title, body, onChange, onCreate, onRemove }) => {

  const titleInput = useRef(null);
  useEffect(() => {
      titleInput.current.focus();
  }, []);

  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      onCreate();
    }
  }

  return(
    <div>
      <div className='input'>
        <div className='input-post'>
          <label for="title">제목</label>
          <input type="text" ref={titleInput} id="title" name="title" onChange={onChange} value={title} onKeyPress={onKeyPress}/>

          <label for="comment">내용</label>
          <input type="text" id="comment" name="body" onChange={onChange} value={body} onKeyPress={onKeyPress}/>
        </div>
        <span className='addpost' onClick={onCreate}>추가하기</span>
      </div>
      <List posts={posts} onRemove={onRemove} setPosts={setPosts}/>
    </div>
  );
};

export default Form;