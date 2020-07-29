import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux'
import { fetchPosts } from './redux/actions'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/layout/NavComponent';
import HeaderComponent from './components/layout/HeaderComponent';
import Post from './components/Post';
import Footer from './components/layout/Footer';

function App() {
  const dispatch = useDispatch()
  //const posts = useSelector(state=>state.posts)
  useEffect(() => { dispatch(fetchPosts()) }, []);

  return (
    <div className="container" >
      <BrowserRouter>
        <HeaderComponent />
        <Nav />
        <div style={{ margin: '10px' }} >
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/Login"><Login /></Route>
            <Route exact path="/posts/:id"><Post /></Route>
          </Switch>
          <Footer />
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;
