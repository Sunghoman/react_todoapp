import Layout from "../components/layout/Layout";
import { useState } from 'react';

const TodoList = () => {

  let [posts, setPosts] = useState([
    {
      id: 0,
      title: '리액트 공부하기',
      body: '리액트 기초를 공부해봅시다',
      isDone: "취소"
    },
    {
      id: 1,
      title: '자바스크립트 공부하기',
      body: '자바스크립트를 공부해봅시다',
      isDone: "완료!"
    },
    {
      id: 2,
      title: '브라우저 동작 원리 공부하기',
      body: '브라우저 동작 원리를 공부해보자',
      isDone: "완료!"
    },
  ])

  return(
    <div>
      <Layout posts={posts} setPosts={setPosts}/>
    </div>
  )
}

export default TodoList;