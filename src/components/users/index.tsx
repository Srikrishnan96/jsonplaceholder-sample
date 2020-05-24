import React from 'react';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import { useStore } from '../../hooks';
import User from './user';
import PageLoader from '../../components/page-loader';
import { observer } from 'mobx-react';

const useUsersStyles = makeStyles({
    typoHead: {
        marginLeft: '32px',
        marginBottom: '20px',
    }
})

const Users = () => {
    const AppStore = useStore();
    const classes = useUsersStyles();
    return (
    AppStore.pageLoaderFlag ?
        <PageLoader /> : 
        <Box component="div" mt={14}>
        <Typography variant="h3" className={classes.typoHead}>
            USERS
        </Typography>
        <Grid container justify="space-around" wrap="wrap">
            {
                AppStore?.usersData.map((user) => {
                    const { id, name, email, phone, username, website } = user;
                    return <User 
                        id={id}
                        name={name}
                        email={email}
                        phone={phone}
                        username={username}
                        website={website} 
                    />
                })
            }
        </Grid>
    </Box>
    );
}

export default observer(Users);