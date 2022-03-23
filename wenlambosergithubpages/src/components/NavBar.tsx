import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import LoginButton from './Metamask/LoginButton'
import styled from "styled-components";

// https://github.com/Iamhafsah/amazon-page/blob/main/src/App.tsx
const StyledNavBar = styled.div`
`

const NavBar = () => {
    return (
        <StyledNavBar>
            <AppBar position="static">
                <Toolbar>
                    <Typography color="inherit">
                        Wen Lambo? Ser!?
                    </Typography>

                    <LoginButton />
                </Toolbar>
            </AppBar>
        </StyledNavBar>
    )
}
export default NavBar
