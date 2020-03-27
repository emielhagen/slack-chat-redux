import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Channel from './channel'

class ChannelList extends Component {
  render() {
    return(
      <div className="channel-list">
        {this.props.channels.map((channel) => <Channel selectedChannel={this.props.selectedChannel} channel={channel} key={channel} />)}
      </div>
    )
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    channels: reduxState.channels
  }
}

export default connect(mapReduxStateToProps)(ChannelList);
