import React, { Component } from 'react';
import MessageList from './MessageList';

const messages = [
  { id: 1, date: '01/01/2017 01:00', recipient: 'test@test.fr', subject: 'Hello World 1'},
  { id: 2, date: '02/01/2017 02:00', recipient: 'test@test.fr', subject: 'Hello World 2'},
  { id: 3, date: '03/01/2017 03:00', recipient: 'test@test.fr', subject: 'Hello World 3'}
];

class MessagesPage extends Component {
  constructor() {
    super();
    this.state = {
      messages: messages,
    };
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Messages</h1>
        </div>
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default MessagesPage;
