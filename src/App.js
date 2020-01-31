import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import Post from './components/Post';
import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="md" className="App">
        <Switch>
          <Route exact path="/">
            <PostList />
          </Route>
          <Route path="/posts/:id">
            <Post />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
