import React from 'react';
import { Grid, CircularProgress, makeStyles } from '@material-ui/core';

const useLoaderStyles = makeStyles({
    loaderGrid: {
        minHeight: '100vh'
    }
});

export default () => {
    const classes = useLoaderStyles();
    return <Grid container justify="center" alignItems="center" className={classes.loaderGrid}>
        <CircularProgress size="100px" thickness={10} color="secondary"/>
    </Grid>
}