import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import BlogListItem from './components/BlogListItem';
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="App">
        <BlogListItem
          id="ed42308e-594c-4e18-b77c-f777f2688b32"
          date="2004-11-16"
          title="Eli Vance"
          excerpt="As seen on his sweater, Eli is presumably a graduate of Harvard University."
        />
      </Container>
    </>
  );
}

export default App;
