import './style.css'

import Header from '../header/Header';
import Form from '../form/Form';

const Layout = (props) => {

  return(
    <div>
      <Header/>
      <Form posts={props.posts} setPosts={props.setPosts}/>
    </div>
  );
}

export default Layout;