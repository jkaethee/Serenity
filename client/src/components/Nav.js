import React, { Component } from 'react';
import {Form, FormGroup, Input, Label} from 'reactstrap';
import '../../src/App.css';
import { Link, Redirect } from 'react-router-dom'

class Nav extends Component {

render() {
    return (
        <nav className="navigationbar">
             <Link to="/" style={{ textDecoration: 'none' }}>
                <h2>{this.props.username}</h2>
             </Link>
            <ul className="navlinks">
                <Link to="/community" style={{ textDecoration: 'none' }}>
                    <li>Community</li>
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