import React, { Component } from 'react';
import isLoginMetaMask from './isLoginMetaMask';
import isMetaMask from './isMetaMask'
import isDesiredNetwork from './isDesiredNetwork'
import Login from './Login'

class MyComponent extends Component {
    components = {
        b: isLoginMetaMask,
        a: isMetaMask,
        c: isDesiredNetwork,
        d: Login
    };
    render() {
        const TagName = this.components[this.props.tag || 'a'];
        return <TagName />
    }
}
export default MyComponent;