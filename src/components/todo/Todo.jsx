import './style.css'

const Todo = (props) => {

  return(
    <div>
      <div className='card'>
        <h3>제목</h3>
        <p>내용</p>
        <div className='buttons'>
          <button>삭제하기</button>
          <button>완료</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;