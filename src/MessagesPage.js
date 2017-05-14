import React, { Component } from 'react';
import MessageList from './MessageList';

class MessagesPage extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Messages</h1>
        </div>
        <MessageList />
      </div>
    );
  }
}

export default MessagesPage;
