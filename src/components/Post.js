import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Button, Box, Card, CardContent, CircularProgress, makeStyles, Typography,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../reducers/postActions';

const useStyles = makeStyles({
  card: {
    margin: 10,
  },
});

export default function Post() {
  const { id } = useParams();
  const classes = useStyles();
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
      <Box>
        <Typography color="error">
          Something went wrong.
        </Typography>
      </Box>
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
      <Button size="large" variant="outlined" color="primary" component={Link} to="/">
        Homepage
      </Button>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography color="textPrimary" variant="h4" component="h3" gutterBottom>
              {title}
            </Typography>
            <Typography color="textSecondary" variant="subtitle2" component="span" gutterBottom>
              {date}
            </Typography>
          </Box>
          <Typography variant="body1" component="p">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
