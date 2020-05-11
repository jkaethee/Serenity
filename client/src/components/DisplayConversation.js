import React, { Component } from 'react';
import {Form, FormGroup, Input, Label} from 'reactstrap';
import '../../src/App.css';
import Nav from './Nav';
import ChatRoom from './ChatRoom';


class DisplayConversation extends Component {
  
  displayMessage = () => this.props.messages.map(message => <div>{message.username} : {message.message}</div>)
  render() {
      return (
        <div className="chatarea">
            { this.displayMessage() }
        </div>
      );
    }
  }

export default DisplayConversation;