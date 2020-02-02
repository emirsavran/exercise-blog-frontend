import React from 'react';
import {
  Box, Card as MUICard, CardActions, CardContent, makeStyles, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  card: {
    margin: 10,
  },
});

export default function Card({
  title, date, content, actions, dangerouslySetInnerHTML,
}) {
  const classes = useStyles();

  return (
    <MUICard variant="outlined" className={classes.card}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography color="textPrimary" variant="h4" component="h3" gutterBottom>
            {title}
          </Typography>
          <Typography color="textSecondary" variant="subtitle2" component="span" gutterBottom>
            {date}
          </Typography>
        </Box>
        <Typography variant="body1" component="p" dangerouslySetInnerHTML={dangerouslySetInnerHTML ? { __html: content } : null}>
          {dangerouslySetInnerHTML ? null : content}
        </Typography>
      </CardContent>
      {actions && (
        <CardActions>
          {actions}
        </CardActions>
      )}
    </MUICard>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actions: PropTypes.node,
  dangerouslySetInnerHTML: PropTypes.bool,
};

Card.defaultProps = {
  actions: undefined,
  dangerouslySetInnerHTML: false,
};
