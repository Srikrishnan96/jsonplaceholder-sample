import React from 'react';
import { Grid, Box, Typography, makeStyles, Button } from '@material-ui/core';
import { observer } from 'mobx-react';
import { useStore } from '../../hooks';
import Post from './post';
import PageLoader from '../../components/page-loader';

const usePostsStyles = makeStyles({
    typoHead: {
        marginLeft: '32px',
        marginBottom: '20px',
    },
    backButton: {
        marginLeft: '32px',
        marginBottom: '20px',
    },
});

const Posts = () => {
    const AppStore = useStore();
    const classes = usePostsStyles()
    return (
    AppStore.pageLoaderFlag ? 
    <PageLoader /> :
    <Box component="div" mt={14}>
        <Button 
        variant="contained"
        color="secondary"
        onClick={() => {
            AppStore.postsDispFlagControl(false);
        }}
        className={classes.backButton}
        >
            Back
        </Button>
        <Typography variant="h3" className={classes.typoHead}>
            {AppStore.user.name}'s POSTS
        </Typography>
        <Grid container justify="space-around" wrap="wrap">
            {
                (AppStore?.user.posts as Array<any>).map((post) => {
                    const { title, body } = post;
                    return <Post title={title} body={body}/>
                })
            }
        </Grid>
    </Box>)
}

export default observer(Posts);