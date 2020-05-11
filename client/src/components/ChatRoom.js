import React, { Component } from 'react';
import '../../src/App.css';
import DisplayConversation from './DisplayConversation';
import MessagingBox from './MessagingBox';

class ChatRoom extends Component {
    state = {
        messages: []
    }

    connection = new WebSocket('ws://localhost:9090/');
    
    componentDidMount() {
        this.connection.onmessage = (message) => {
            const data = JSON.parse(message.data);
            this.setState({messages: [...this.state.messages, data]})
        }
    }

    getMessage = (message) => {
        const data = {username: this.props.username, message: message}
        this.connection.send(JSON.stringify(data));
    }

    render() {
        return (
        <div className="chatroom">
            <DisplayConversation messages={this.state.messages} />
            <MessagingBox getMessage={this.getMessage}/>
        </div>
        );
    }
}

export default ChatRoom;