import './style.css'

import List from '../list/List';

const Form = ( posts ) => {

  return(
    <div>
      <div className='input'>
        <div className='input-post'>
          <label for="title">제목</label>
          <input type="text" id="title" name="title"/>

          <label for="comment">내용</label>
          <input type="text" id="comment" name="body"/>
        </div>
        <span className='addpost'>추가하기</span>
      </div>
      <List posts={posts}/>
    </div>
  );
}

export default Form;