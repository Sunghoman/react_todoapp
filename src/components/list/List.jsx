import './style.css'

import Todo from '../todo/Todo';

const List = ({ posts, setPosts }) => {

  let copy = [...posts]
  const setBtn = (posts) => {

    let new_obj = copy.map(user => {
      if (user.id === posts.id) {
        if (user.isDone === "완료!") {
          return(
            {...user, isDone: "취소"}
          )
        } else {
          return (
            {...user, isDone: "완료!"}
          )
        }
      } else {
        return {...user}
      }
    })
    setPosts(new_obj);
  }

  const working_filter = posts.filter((todo) => { return todo.isDone === "완료!" }).map((todo, i) => {
    return(<Todo setBtn={setBtn} todo={todo} setPosts={setPosts} posts={posts} key={i} i={i}/>)
  })
  const done_filter = posts.filter((todo) => { return todo.isDone === "취소"}).map((todo, i) => {
    return(<Todo setBtn={setBtn} todo={todo} setPosts={setPosts} posts={posts} key={i} i={i} />)
  })

  return(
    <div>

        <h2>Working...</h2>
        <div className='card-list'>
          { working_filter }
        </div>


      <hr/>

        <h2>Done...!</h2>
        <div className='card-list'>
          { done_filter }
        </div>

    </div>
  );
};

export default List;