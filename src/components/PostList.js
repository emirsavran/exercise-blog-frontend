import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import PostListItem from './PostListItem';
import { fetchPosts } from '../reducers/postActions';

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (posts.loading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (posts.error) {
    return (
      <Box>
        <Typography color="error">
          Something went wrong.
        </Typography>
      </Box>
    );
  }

  return posts.allIds.map((id) => {
    const post = posts.postsById[id];
    return (
      <PostListItem
        key={id}
        id={id}
        title={post.title}
        date={post.date}
        excerpt={post.excerpt}
      />
    );
  });
}
