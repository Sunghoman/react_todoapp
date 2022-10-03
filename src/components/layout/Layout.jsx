import './style.css'

import Header from '../header/Header';
import Form from '../form/Form';

import { useState, useRef } from 'react';

const Layout = (props) => {

  const [inputs, setInputs] = useState({
    title: '',
    body: '',
  });
  const { title, body } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const nextId = useRef(4);

  const onCreate = () => {
    if (title && body) {
      const post = {
        id: nextId.current,
        title,
        body,
        isDone: "완료!"
      }
      props.setPosts([...props.posts, post])
      setInputs({
        title: '',
        body: ''
      })
      nextId.current += 1;
    }
  }

  const onRemove = id => {
    props.setPosts(props.posts.filter(post => post.title !== title))
  }

  return(
    <div className='content'>
      <Header/>
      <Form posts={props.posts} setPosts={props.setPosts} onChange={onChange} onCreate={onCreate} onRemove={onRemove} title={title} body={body}/>
    </div>
  );
}

export default Layout;