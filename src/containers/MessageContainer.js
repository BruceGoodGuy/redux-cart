import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message/message';
class MessageContainer extends Component {
  render(){
    var {message} = this.props;
    return (<Message message={message}></Message>)
  }
}

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired
}

// gán cho props products 1 states.
// lấy từ store
const mapStateToProps = state => {
    return {
       message: state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);
