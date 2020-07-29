import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { apiUrl } from '../shared/consts';
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import HrComponent from './HrComponent';
import moment from 'moment'


const Post = () => {
  let posts = useSelector(state => state.posts).length
  let [post, setPost] = useState({})
  let { id } = useParams()

  useEffect(() => {
    Axios.get(`${apiUrl}/${id}`)
      .then((response) => {
        //   console.log(response.data.post.author.name)
        setPost(response.data.post)
        // console.log(post)
      })
      .catch((error) => { console.log(error) })

  }, [id])


  return (
    <div style={{ textAlign: "center" }}>
      <h1>{post.title}</h1>
      <p>by:{JSON.stringify(post.author)}  {moment(post.createdAt).format('MMMM, DD YYYY')}</p>
      <img src="https://via.placeholder.com/728x300.png?text=this+is+placeholder+Image" alt="placeholder image" style={{ width: '100%' }} />
      <p style={{ textAlign: "left" }}>{post.content}</p>
      <HrComponent />
      <Link to={`${post.prev}`}><span className="btn btn-primary">prev</span></Link>
      {" "} post no. {id} of {posts} {" "}
      <Link to={`${post.next}`}><span className="btn btn-primary">next</span></Link>
      <HrComponent />
    </div>
  );
}

export default Post;
