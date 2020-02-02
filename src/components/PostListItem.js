import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import Card from './Card';

function PostListItem({
  id, title, date, excerpt,
}) {
  return (
    <Card
      title={title}
      date={date}
      content={excerpt}
      actions={(
        <Button size="large" component={Link} to={`/posts/${id}`}>
          Read More
        </Button>
    )}
    />
  );
}

PostListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default memo(PostListItem);
