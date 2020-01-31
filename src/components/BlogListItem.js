import React, { memo } from 'react';
import {
  Button, Box, Card, CardActions, CardContent, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

// use id for router
function BlogListItem({
  id, title, date, excerpt,
}) {
  return (
    <Card variant="outlined">
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
        <Button size="large">Read More</Button>
      </CardActions>
    </Card>
  );
}

BlogListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default memo(BlogListItem);
