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
          
          <label className='form-title' for="title">
            <span className='label'>제목</span>
          </label>
          <input type="text" maxlength='16' ref={titleInput} name="title" autocomplete="off" onChange={onChange} value={title} onKeyPress={onKeyPress}/>

          <label className='form-body' for="body">
            <span className='label'>내용</span>
          </label>
          <input type="text" maxlength='40' name="body" autocomplete="off" onChange={onChange} value={body} onKeyPress={onKeyPress}/>
          
        </div>
        <span className='addpost' onClick={onCreate}>+ Add task</span>
      </div>
      <List posts={posts} onRemove={onRemove} setPosts={setPosts}/>
    </div>
  );
};

export default Form;