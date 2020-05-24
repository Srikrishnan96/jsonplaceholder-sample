import React from 'react';
import { Card, CardActions, Typography, CardContent, makeStyles, Button } from '@material-ui/core';
import { useStore } from '../../hooks';

const useStyles = makeStyles({
  root: {
    width: 345,
    marginBottom: '40px',
  },
});

export default (props: {
    id: number,
    name: string,
    email: string,
    website: string,
    phone: string,
    username: string,
}): React.ReactElement => {
  const classes = useStyles();
  const AppStore = useStore();
  const { id, name, email, website, phone, username } = props;

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            User Name: {username}
            <br />
            Email: {email}
            <br />
            Phone: {phone}
            <br />
            Website: {website}
          </Typography>
        </CardContent>
        <CardActions>
            <Button
            variant="contained"
            color="primary"
            onClick={async () =>{
                AppStore.userControl('id', id);
                AppStore.userControl('name', name);
                await AppStore.getPostsData();
            }}>
                See posts
            </Button>
        </CardActions>
    </Card>
  );
}
