import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { createStore, combineReducers } from "redux";
import { Provider as ReduxProvider } from 'react-redux'

import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import NavBar from './components/NavBar'
import CourseList from './components/AssetList'
import './App.css';
import { store } from './app/store'

export default function App() {
    // TODO: Theme Toggle - theme
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(() => createTheme({
        palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
        },

    }), [prefersDarkMode]);

    return (
        <React.StrictMode>
            <ReduxProvider store={store}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <NavBar />
                        <CourseList />
                    </ThemeProvider>
                </BrowserRouter>
            </ReduxProvider>
        </React.StrictMode>
    );    
}