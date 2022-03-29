import React, { Component, useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ReactReduxContext } from 'react-redux'

import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import NavBar from './features/header/NavBar'
import AssetList from './features/asset/AssetList'
import './App.css';

export default function App() {       
    // TODO: Theme Toggle - theme
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(() => createTheme({
        palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
        },

    }), [prefersDarkMode]);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NavBar />
                <AssetList />
            </ThemeProvider>
        </BrowserRouter>
    );    
}