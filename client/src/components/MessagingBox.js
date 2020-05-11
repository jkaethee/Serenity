import React, { Component } from 'react';
import '../../src/App.css';


class MessagingBox extends Component {

    messageHandler = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.props.getMessage(e.target.value);
            e.target.value = "";
        }
    }

render() {
    return (
      <div>
        <textarea onKeyDown={this.messageHandler}></textarea>
      </div>
    );
  }
}

export default MessagingBox;