import React, { Component } from 'react'
import { emojify } from 'react-emojione';

function strToRGB(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return `#${"00000".substring(0, 6 - c.length)}${c}`;
}


class Message extends Component {
  render() {
    const { user, content, created_at } = this.props.message;
    const time = new Date(created_at).toLocaleTimeString();
    return(
      <div className="message">
        <strong style={{color: strToRGB(user.email)}}>{user.email}</strong><small> - {time}</small><br/>
        <p>{emojify(content)}</p>
      </div>
    )
  }
}

export default Message
