import React from 'react';
import PropTypes from 'prop-types';
import "./demo.css"
import {Link} from "react-router-dom"
PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};
function PostList(props) {
  const { title,author,item } = props;


  return (
   <div >
      <ul className="post-lists" >

    <li><Link className="link">{title}</Link></li>
    </ul>
   </div>
  );
}

export default PostList;