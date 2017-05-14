import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    console.log(this.props.messages);
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
                return <tr><td>{message.id}</td><td>{message.date}</td><td>{message.recipient}</td><td>{message.subject}</td><td></td></tr>;
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
