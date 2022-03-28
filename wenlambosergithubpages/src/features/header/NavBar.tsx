import React from 'react';
import * as Colors from '@material-ui/styles/'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import LoginButton from '../metamask/LoginButton'

const PageTitle = 'Wen Lambo? Ser!?'

const NavBar = () => {
    return (
        <div>
            <AppBar position="static" title={PageTitle} color="transparent">
                <Toolbar>
                    <h1 style={{marginRight:'1rem'}}>
                        {PageTitle}
                    </h1>

                    <LoginButton />
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar
