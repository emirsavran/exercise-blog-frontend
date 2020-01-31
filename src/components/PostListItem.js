import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Box, Card, CardActions, CardContent, makeStyles, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  card: {
    margin: 10,
  },
});

function PostListItem({
  id, title, date, excerpt,
}) {
  const classes = useStyles();

  return (
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
          {excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" component={Link} to={`/posts/${id}`}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

PostListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default memo(PostListItem);
