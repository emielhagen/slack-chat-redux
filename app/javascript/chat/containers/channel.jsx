import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMessages } from '../actions'

class Channel extends Component {
  handleClick = () => {
    this.props.fetchMessages(this.props.channel);
  }

  render() {
    const selected = `channel ${(this.props.channel === this.props.selectedChannel) ? 'selected' : '' }`
    return(
      <Link to={`/channels/${this.props.channel}`}>
        <div className={selected} onClick={this.handleClick}>
          #{this.props.channel}
        </div>
      </Link>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(null, mapDispatchToProps)(Channel);
