import React, { Component } from 'react';
import NavBar from './components/NavBar'
import CourseList from './components/CourseList'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LoginButton from './components/Metamask/LoginButton'

export default function App() {    
    return (
        <React.StrictMode>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <NavBar />
                <LoginButton />
                <CourseList />
            </BrowserRouter>
        </React.StrictMode>
    );
    
}