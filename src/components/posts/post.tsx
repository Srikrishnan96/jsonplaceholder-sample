import React from 'react';
import { Card, Typography, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 345,
    marginBottom: '40px',
  },
});

export default (props: {
    title: string,
    body: string,
}): React.ReactElement => {
  const classes = useStyles();
  const { title, body } = props;

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {body}
          </Typography>
        </CardContent>
    </Card>
  );
}
