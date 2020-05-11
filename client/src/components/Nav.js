import React, { Component } from 'react';
import {Form, FormGroup, Input, Label} from 'reactstrap';
import '../../src/App.css';
import { Link, Redirect } from 'react-router-dom'

class Nav extends Component {

render() {
    return (
        <nav className = "navigationbar">
            <h3>{this.props.username}</h3>
            <ul className="navlinks">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <li>HomePage</li>
                </Link>
                <Link to="/chatroom" style={{ textDecoration: 'none' }}>
                    <li>ChatRoom</li>
                </Link>
            </ul>
        </nav>
    );
  }
}

export default Nav;