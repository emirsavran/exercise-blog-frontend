import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import PostList from './components/PostList';
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="App">
        <PostList />
      </Container>
    </>
  );
}

export default App;
