import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
import MessageForm from './message_form'
import { fetchMessages } from '../actions';


class MessageList extends Component {
  componentDidMount() {
    this.fetchMessages(this.props.selectedChannel);
    this.refresher = setInterval(this.fetchMessages, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel)
  }

  render() {
    return(
      <div className="channel-content">
        <div className="channel-title">
          <strong> Channel #{this.props.selectedChannel} </strong>
        </div>
        <div className="message-list" ref={(list) => { this.list = list; }} >
          {this.props.messages.map((message) => <Message message={message} key={message.created_at} />)}
        </div>
        <MessageForm selectedChannel={this.props.selectedChannel} />
      </div>
    )
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    messages: reduxState.messages
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(MessageList);
