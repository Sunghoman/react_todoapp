import './style.css'

import Todo from '../todo/Todo';

const List = ({  posts, setPosts  }) => {

  return(
    <div>

        <h2>Working...</h2>
        <div className='card-list'>
          <Todo/>
        </div>

      <hr/>

        <h2>Done...!</h2>
        <div className='card-list'>
          <Todo/>
        </div>

    </div>
  );

}

export default List;