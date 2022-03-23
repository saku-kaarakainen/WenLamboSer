import React, { Component } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from './components/NavBar'
import CourseList from './components/CourseList'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <NavBar />
                    <CourseList />
                </ThemeProvider>
            </BrowserRouter>
        </React.StrictMode>
    );    
}