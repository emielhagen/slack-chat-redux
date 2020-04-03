import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Channel from './channel';
import ChannelForm from './channel_form';

class ChannelList extends Component {
  render() {
    return(
        <div className="channel-list">
          {this.props.channels.map((channel) => <Channel selectedChannel={this.props.selectedChannel} channel={channel} key={channel} />)}
          <ChannelForm />
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
