import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submitMessage } from '../actions/index';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  componentDidMount() {
    this.foc.focus();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitMessage(this.state.value, this.props.selectedChannel);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" className='input-box' value={this.state.value} onChange={this.handleChange} ref={(foc) => this.foc = foc} />
          <input type="submit" className='submit-button' value="Submit" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitMessage }, dispatch);
}

export default connect(null, mapDispatchToProps)(MessageForm);
