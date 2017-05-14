import React, { Component } from 'react';
import MessageListItem from './MessageListItem';

class MessageList extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">Last messages</div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Recipient</th>
                <th>Subject</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.messages.map((message, i) => {
                return <MessageListItem key={i} message={message} />;
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MessageList;
