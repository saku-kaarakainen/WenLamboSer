import React, { Component } from 'react';
import NavBar from './components/NavBar'
import CourseList from './components/CourseList'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <NavBar />
                <CourseList />
            </BrowserRouter>
        );
    }
}