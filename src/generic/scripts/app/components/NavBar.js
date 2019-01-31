import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = props => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    octogon.io -- Music Generator
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar