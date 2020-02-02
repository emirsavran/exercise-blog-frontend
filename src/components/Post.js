/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Button, Box, CircularProgress, Typography,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { fetchPosts } from '../reducers/postActions';

const homepageButton = (
  <Button size="large" variant="outlined" color="primary" component={Link} to="/">
    Homepage
  </Button>
);

export default function Post() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state);
  const post = posts.postsById[id];

  useEffect(() => {
    // if post doesn't exist in store and
    // there is no error indicating fetching
    // has been tried, fetch it
    if (!post && !posts.error) {
      dispatch(fetchPosts(id));
    }
  }, [post, posts.error, id, dispatch]);

  if (posts.error) {
    return (
      <>
        {homepageButton}
        <Typography color="error">
          Something went wrong.
        </Typography>
      </>
    );
  }

  if (!post || posts.loading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  const { title, date, content } = post;

  return (
    <>
      {homepageButton}
      <Card
        title={title}
        date={date}
        content={content}
        dangerouslySetInnerHTML
      />
    </>
  );
}
