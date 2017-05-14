import React, { Component } from 'react';

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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Date...</td>
                <td>Recipient...</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MessageList;
