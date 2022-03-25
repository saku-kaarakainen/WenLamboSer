import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { createStore, applyMiddleware, Store } from "redux";
import { Provider as ReduxProvider } from 'react-redux'
import thunk from 'redux-thunk'

import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import NavBar from './components/NavBar'
import CourseList from './components/CourseList'
import './App.css';
import reducer from './store/reducer'

export default function App() {
    // TODO: Theme Toggle - theme
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(() => createTheme({
        palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
        },

    }), [prefersDarkMode]);

    const store: Store<AssetState, AssetAction> & {
        dispatch: DispatchType;
    } = createStore(reducer, applyMiddleware(thunk));

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