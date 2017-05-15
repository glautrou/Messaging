import React, { Component } from 'react';

class MessageListItem extends Component {
  render() {
    var { message } = this.props;
    return (
      <tr>
        <td>{message.id}</td>
        <td>{message.date}</td>
        <td>{message.recipient}</td>
        <td>{message.subject}</td>
        <td></td>
      </tr>
    );
  }
}

export default MessageListItem;
