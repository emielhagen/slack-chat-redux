import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submitChannel } from '../actions/index';

class ChannelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitChannel(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div>
        <div className="channel-form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" className='input-box' placeholder='add channel' value={this.state.value} onChange={this.handleChange} ref={(foc) => this.foc = foc} />
          </form>
          <i className="fas fa-plus" onClick={this.handleSubmit}></i>
        </div>
      </div>
    );
  }
}

// <input type="submit" className='submit-button' value="Submit" />

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitChannel }, dispatch);
}

export default connect(null, mapDispatchToProps)(ChannelForm);
