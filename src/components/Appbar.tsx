import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@material-ui/core';

const NavBar = () => 
    <AppBar color="default">
        <Toolbar>
            <Box component="span">
                <Typography variant="h6">
                    SAMPLE WEBPAGE
                </Typography>
            </Box>
            <Box component="ul">

            </Box>
        </Toolbar>
    </AppBar>


export default NavBar;