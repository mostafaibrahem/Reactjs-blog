import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Home = () => {
  let posts = useSelector(state => state.posts)
  const dateFormater = (date) => {
    console.log(new Date(date).toString())
    return new Date(date).toString()
  }


  return (
    <div>
      {posts.map((post) => (
        <div id={post.id} style={{ marginBottom: "10px" }}>
          <Card body outline color="primary" >
            <CardTitle>{post.title}</CardTitle>
            <CardText>
              {dateFormater(Date.parse(post.createdAt))}
            </CardText>
            <CardText>{post.content.substring(0, 200)} ... <Link to={`/posts/${post.id}`}>see more</Link> </CardText>


          </Card>
        </div>
      ))}
    </div>
  );
}

export default Home;
