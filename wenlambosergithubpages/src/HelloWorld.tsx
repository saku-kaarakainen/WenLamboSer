import React from 'react';
import logo from './assets/racing-car-svgrepo-com.svg';

class HelloWorld extends React.Component {
    render() {
        return <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>test</p>
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    }
}

export default HelloWorld